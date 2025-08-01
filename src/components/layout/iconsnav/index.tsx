import Button from "../../ui/button";
import {
  LinkIcon,
  ShoppingCartIcon,
  BellIcon,
} from "@heroicons/react/24/outline";

const IconsNav = () => {
  return (
    <div className="flex items-center space-x-2">
      <Button className="h-[43px] relative" variant="outline">
        <ShoppingCartIcon width={20} hanging={25} />
        <div className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
          2
        </div>
      </Button>

      <Button className="h-[43px]" variant="outline">
        <LinkIcon width={20} hanging={25} />
      </Button>

      <Button className="h-[43px] relative" variant="outline">
        <BellIcon width={20} hanging={25} />
        <div className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
          3
        </div>
      </Button>
    </div>
  );
};

export default IconsNav;
