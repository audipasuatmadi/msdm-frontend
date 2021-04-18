import PeopleIcon from '@material-ui/icons/People';
import AccountBalance from '@material-ui/icons/AccountBalance';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LockIcon from '@material-ui/icons/Lock';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Employees from './pages/Employees/Employees';
import Dashboard from './pages/Dashboard/Dashboard';
import Investor from './pages/Investors/Investor'
import Stakeholders from './pages/Stakeholders/Stakeholders'

const routes = [
  {
    name: 'Dashbor',
    icon: DashboardIcon,
    route: '/',
    component: Dashboard
  },
  {
    name: 'Stakeholders',
    icon: AssignmentIndIcon,
    route: '/stakeholders',
    component: Stakeholders
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
    component: Investor
  },
  {
    name: 'Tentang Kami',
    icon: EmojiEmotionsIcon,
    divider: true,
    route: '/about',
  },
];

export default routes;
