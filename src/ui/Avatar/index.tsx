import React from "react";
import cn from 'classnames';
import AvatarIndicator from "./Indicator";

enum AvatarVariant {
  BASIC = "basic",
  ROUNDED = "rounded"
}

export type AvatarProps = {
  variant?: AvatarVariant;
  content: React.ReactNode | string;
  hasIndicator?: boolean;
  indicatorColor?: string;
}

const Avatar: React.FC<AvatarProps> = ({ variant, content, hasIndicator, indicatorColor }) => {
  const usedVariant = variant || AvatarVariant.BASIC;
  const indicator = indicatorColor || "red";

  return (
    <div
      className={cn(
        "relative flex h-10 w-10 shrink-0 select-none items-center justify-center bg-gray-100 text-sm font-bold uppercase text-gray-800",
        {
          "rounded-full": usedVariant === AvatarVariant.BASIC,
          "rounded": usedVariant === AvatarVariant.ROUNDED,
        }
      )}>
      {content}
      {hasIndicator && <AvatarIndicator color={indicator} />}
    </div>
  )
}

export { Avatar, AvatarVariant };