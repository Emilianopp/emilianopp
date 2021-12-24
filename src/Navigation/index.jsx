import { ProSidebar,SidebarHeader, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import 'styles/Navigation/navigation.scss'
export default function Navigation() {
  return (
<ProSidebar>
<SidebarHeader>
   Emiliano Penaloza
  </SidebarHeader>
  <Menu iconShape="square">
    <MenuItem >Dashboard</MenuItem>
    <SubMenu title="Components" >
      <MenuItem>Component 1</MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu>
  </Menu>
</ProSidebar>
  );
}
