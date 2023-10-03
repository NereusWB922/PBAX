import { Skeleton } from "@mui/material";

const SkeletonCard = () => {
  return (
    <>
      <Skeleton
        variant="rectangular"
        height={40}
        sx={{ padding: "0.5rem 1rem", m: "1rem 0 0.7rem 0" }}
      />
      <Skeleton variant="rectangular" height={130} />
      <Skeleton
        variant="rectangular"
        height={40}
        sx={{ padding: "0.5rem 1rem", m: "1rem 0 0.7rem 0" }}
      />
      <Skeleton variant="rectangular" height={100} />
      <Skeleton
        variant="rectangular"
        height={40}
        sx={{ padding: "0.5rem 1rem", m: "1rem 0 0.7rem 0" }}
      />
      <Skeleton variant="rectangular" height={90} />
      <Skeleton
        variant="rectangular"
        height={40}
        sx={{ padding: "0.5rem 1rem", m: "1rem 0 0.7rem 0" }}
      />
      <Skeleton variant="rectangular" height={120} />
    </>
  );
};

export default SkeletonCard;
