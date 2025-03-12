interface DottedSeparatorProps {
  className?: string;
  color?: string;
  height?: string;
  dotSize?: string;
  gapSize?: string;
  direction?: "horizontal" | "vertical";
}
import { cn } from "@/lib/utils";
import React, { FC } from "react";

export const DottedSeparator: FC<DottedSeparatorProps> = ({
  className,
  color = "#d4d4d8",
  direction = "horizontal",
  dotSize = "2px",
  gapSize = "6px",
  height = "2px",
}) => {
  const isHorizontal = direction === "horizontal";

  return (
    <div
      className={cn(
        isHorizontal
          ? "w-full flex items-center"
          : "h-full flex flex-col items-center",
        className
      )}
    >
      <div
        style={{
          width: isHorizontal ? "100%" : height,
          height: isHorizontal ? height : "100%",
          backgroundImage: `radial-gradient(circle,${color} 25%,transparent 25%)`,
          backgroundSize: isHorizontal
            ? `${parseInt(dotSize) + parseInt(gapSize)}px ${height}`
            : `${height} ${parseInt(dotSize) + parseInt(gapSize)}px`,
          backgroundRepeat: isHorizontal ? "repeat-x" : "repeat-y",
          backgroundPosition: "center",
        }}
        className={isHorizontal ? "flex-grow" : "flex-grow-0"}
      />
    </div>
  );
};
