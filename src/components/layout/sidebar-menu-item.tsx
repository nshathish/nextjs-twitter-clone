export interface SideBarMenuItemProps {
  text: string;
  isActive?: boolean;
  Icon: any;
}

export default function SideBarMenuItem({text, Icon, isActive}: SideBarMenuItemProps) {
  return (
    <div className='hover-effect flex items-center text-gray-700 justify-center xl:justify-start text-lg space-x-3'>
      <Icon className='h-7' />
      <span className={`${isActive && 'font-bold'} hidden xl:inline`}>{text}</span>
    </div>
  )
}