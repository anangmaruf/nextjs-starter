import { FC } from "react";
import { Skeleton } from "../ui/skeleton";

type SkeletonProps = {
  width: string;
  height: string;
};

const SkeletonLoading: FC<SkeletonProps> = ({ width, height }) => {
  return (
    <div className="">
      <Skeleton className={`h-[${height}px] rounded w-[${width}px] bg-gray-300`} />
    </div>
  );
};

export default SkeletonLoading;
