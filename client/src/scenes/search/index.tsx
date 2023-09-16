import { useSearchProteinInteractionsQuery } from "@/state/api";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "@/components/header";
import { useState } from "react";
import columns from "./columns";

const SearchPage = () => {
  const theme = useTheme();
  // Variables for query
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 20,
    page: 0,
  });

  const { data, isLoading } = useSearchProteinInteractionsQuery({
    paginationModel: JSON.stringify(paginationModel),
    sort: JSON.stringify(sort),
    search,
  });

  console.log("data", data);

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="Proteins Interactions"
        subtitle="List of protein interactions data"
      />
      <Box
        p="0.5rem 0"
        height="80vh"
        sx={{
          "& .MuiDataGrid-root": {
            color: theme.palette.grey[300],
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: `1px solid ${theme.palette.grey[800]} !important`,
          },
          "& .MuiDataGrid-columnHeaders": {
            borderBottom: `1px solid ${theme.palette.grey[800]} !important`,
            backgroundColor: theme.palette.grey[300],
            color: theme.palette.grey[900],
            fontWeight: "bold",
          },
          "& .MuiDataGrid-columnSeparator": {
            visibility: "hidden",
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.grey[600],
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          rows={(data && data.proteinInteractions) || []}
          getRowId={(row) => row._id}
          rowCount={(data && data.total) || 0}
          columns={columns}
          //Pagination
          pagination={true}
          pageSizeOptions={[20, 50, 100]}
          paginationModel={paginationModel}
          paginationMode="server"
          onPaginationModelChange={(paginationModel) =>
            setPaginationModel(paginationModel)
          }
          //Sorting
          sortingMode="server"
          onSortModelChange={(newSortModel) => setSort(newSortModel[0])}
        />
      </Box>
    </Box>
  );
};

export default SearchPage;
