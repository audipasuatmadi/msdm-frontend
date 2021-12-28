import PeopleIcon from '@material-ui/icons/People';
import AccountBalance from '@material-ui/icons/AccountBalance';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LockIcon from '@material-ui/icons/Lock';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Employees from './pages/Employees/Employees';
import Dashboard from './pages/Dashboard/Dashboard';
import Departemen from './pages/Departement/Departement';
import Investor from './pages/Investors/Investor';
import Stakeholders from './pages/Stakeholders/Stakeholders';
import Roles from './pages/Roles/Roles';

const routes = [
  {
    name: 'Dashbor',
    icon: DashboardIcon,
    route: '/',
    component: Dashboard,
  },
  {
    name: 'Stakeholders',
    icon: AssignmentIndIcon,
    route: '/stakeholders',
    component: Stakeholders,
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
    component: Departemen,
  },
  {
    name: 'Jabatan',
    icon: LockIcon,
    route: '/roles',
    component: Roles,
  },
  {
    name: 'Investor',
    icon: MonetizationOnIcon,
    route: '/investors',
    component: Investor,
  },
];

export default routes;
