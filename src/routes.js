import PeopleIcon from '@material-ui/icons/People';
import AccountBalance from '@material-ui/icons/AccountBalance';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LockIcon from '@material-ui/icons/Lock';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Employees from './pages/Employees/Employees';

const routes = [
  {
    name: 'Dashbor',
    icon: DashboardIcon,
    route: '/',
  },
  {
    name: 'Stakeholders',
    icon: AssignmentIndIcon,
    route: '/stakeholders',
  },
  {
    name: 'Karyawan',
    icon: PeopleIcon,
    divider: true,
    route: '/employees',
    component: Employees,
  },
  {
    name: 'Departemen',
    icon: AccountBalance,
    route: '/departments',
  },
  {
    name: 'Jabatan',
    icon: LockIcon,
    route: '/roles',
  },
  {
    name: 'Investor',
    icon: MonetizationOnIcon,
    route: '/investors',
  },
  {
    name: 'Tentang Kami',
    icon: EmojiEmotionsIcon,
    divider: true,
    route: '/about',
  },
];

export default routes;
