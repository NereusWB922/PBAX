import { useSearchProteinInteractionsQuery } from "@/state/api";
import { Backdrop, Box, useTheme } from "@mui/material";
import { DataGrid, GridPaginationModel, GridSortModel } from "@mui/x-data-grid";
import Header from "@/components/header";
import { useState } from "react";
import columns from "./columns";
import DataGridCustomToolbar from "@/components/customDataGridComponent/dataGridCustomToolbar";
import CustomNoRowsOverlay from "@/components/customDataGridComponent/customNoRowsOverlay";
import { AdvancedSearchModel } from "@/types/types";
import { initialAdvancedSearchModel } from "./initialValues";
import AdvancedSearchForm from "@/components/AdvancedSearchForm";

const SearchPage = () => {
  const theme = useTheme();
  // Variables for query
  const [sort, setSort] = useState<GridSortModel>([]);
  const [search, setSearch] = useState<string>("");
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    pageSize: 50,
    page: 0,
  });
  const [columnVisibilityModel, setColumnVisibilityModel] = useState({
    pdb_id: true,
    mutations: true,
    protein1: true,
    protein2: true,
    experiment: false,
    temperature: false,
    ph: false,
    delta_g: true,
    delta_delta_g: true,
    authors: false,
    journal: false,
    pubmed_id: true,
  });
  const [tempSearchInput, setTempSearchInput] = useState<string>("");
  const [advancedSearch, setAdvancedSearch] = useState<AdvancedSearchModel>(
    initialAdvancedSearchModel
  );
  const [showSearchForm, setShowSearchForm] = useState(false);

  const closeSearchForm = () => {
    setShowSearchForm(false);
  };

  const openSearchForm = () => {
    setShowSearchForm(true);
  };

  const { data, isLoading } = useSearchProteinInteractionsQuery({
    paginationModel: JSON.stringify(paginationModel),
    sort: JSON.stringify(sort),
    search,
  });

  console.log("data", data);
  console.log("advancedSearch", advancedSearch);

  return (
    <>
      <Backdrop sx={{ zIndex: "10" }} open={showSearchForm}>
        <AdvancedSearchForm
          closeSearchForm={closeSearchForm}
          setAdvancedSearch={setAdvancedSearch}
        />
      </Backdrop>
      <Box m="1rem 1.5rem">
        <Header title="Proteins Interactions" />
        <Box
          height="85vh"
          sx={{
            "& .MuiDataGrid-root": {
              color: theme.palette.grey[100],
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${theme.palette.grey[800]} !important`,
              fontSize: "13px",
            },
            "& .MuiDataGrid-main": {
              p: "0.5rem 0 0 0",
              borderBottom: "none",
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: `1px solid ${theme.palette.grey[800]} !important`,
              backgroundColor: theme.palette.grey[300],
              color: theme.palette.grey[900],
              fontWeight: "50",
            },
            "& .MuiDataGrid-virtualScroller": {
              borderBottom: `1px solid ${theme.palette.grey[800]} !important`,
              backgroundColor: theme.palette.grey[900],
              color: theme.palette.secondary[100],
              overflowX: "hidden",
              minHeight: "auto",
            },
            "& .MuiDataGrid-virtualScroller::-webkit-scrollbar": {
              width: "0.6em",
              overflow: "auto",
            },
            "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track": {
              backgroundColor: "transparent",
            },
            "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb": {
              background: theme.palette.primary[400],
              borderRadius: "20px",
              backgroundClip: "content-box",
            },
            "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb:hover": {
              background: theme.palette.primary[600],
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: "hidden",
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: theme.palette.grey[600],
              color: theme.palette.grey[900],
              fontWeight: "bold",
              borderTop: "none",
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${theme.palette.secondary[200]} !important`,
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: `${theme.palette.secondary[200]} !important`,
            },
            "& .MuiDataGrid-toolbarContainer .MuiInputLabel-formControl": {
              color: `${theme.palette.secondary[100]} !important`,
            },
            "& .MuiDataGrid-toolbarContainer .MuiIconButton-root": {
              color: `${theme.palette.secondary[200]} !important`,
            },
            "& .MuiDataGrid-toolbarContainer .MuiOutlinedInput-input": {
              color: `${theme.palette.secondary[100]} !important`,
            },
          }}
        >
          <DataGrid
            disableRowSelectionOnClick
            loading={isLoading || !data}
            rows={(data && data.proteinInteractions) || []}
            getRowId={(row) => row._id}
            rowCount={(data && data.total) || 0}
            columns={columns}
            columnVisibilityModel={columnVisibilityModel}
            onColumnVisibilityModelChange={(newModel) =>
              setColumnVisibilityModel({
                ...columnVisibilityModel,
                ...newModel,
              })
            }
            // Pagination
            pagination={true}
            pageSizeOptions={[20, 50, 100]}
            paginationModel={paginationModel}
            paginationMode="server"
            onPaginationModelChange={(paginationModel) =>
              setPaginationModel(paginationModel)
            }
            // Sorting
            sortingMode="server"
            onSortModelChange={(newSortModel) => setSort(newSortModel)}
            // Custom toolbar
            slots={{
              toolbar: DataGridCustomToolbar,
              noRowsOverlay: CustomNoRowsOverlay,
            }}
            slotProps={{
              toolbar: {
                tempSearchInput,
                setTempSearchInput,
                setSearch,
                openSearchForm,
              },
              columnsPanel: {
                disableHideAllButton: true,
                disableShowAllButton: true,
              },
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default SearchPage;
