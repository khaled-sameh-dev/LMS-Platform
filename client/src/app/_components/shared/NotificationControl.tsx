import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Bell } from "lucide-react";

const NotificationControl = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="relative p-2 rounded-lg hover:bg-secondry-blue transition-colors cursor-pointer">
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
          <Bell className="w-5 h-5 text-muted-foreground" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-80 bg-secondry-blue border-white/10"
      >
        <DropdownMenuLabel className="text-white">
          Notifications
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-white/10" />
        <div className="max-h-96 overflow-y-auto">
          <DropdownMenuItem className="text-dirty-grey hover:bg-primary-blue hover:text-white cursor-pointer">
            <div className="flex flex-col gap-1">
              <p className="font-medium">New course assignment</p>
              <p className="text-xs opacity-70">2 hours ago</p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-dirty-grey hover:bg-primary-blue hover:text-white cursor-pointer">
            <div className="flex flex-col gap-1">
              <p className="font-medium">Certificate earned</p>
              <p className="text-xs opacity-70">1 day ago</p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-dirty-grey hover:bg-primary-blue hover:text-white cursor-pointer">
            <div className="flex flex-col gap-1">
              <p className="font-medium">New message from instructor</p>
              <p className="text-xs opacity-70">2 days ago</p>
            </div>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationControl;
