import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

export const SidebarData = [
    {
        id: '1',
        title: 'Почетна табла',
        path: '/',
        icon: <DashboardIcon/>,
    } ,
    {
        id: '2',
        title: 'Доставувачи',
        path: '/suppliers',
        icon: <AssignmentIndIcon/>,
    },
    {
        id: '3',
        title: 'Откуп на грозје',
        path: '/grapeDelivery',
        icon: <LocalShippingIcon/>,
    }
];