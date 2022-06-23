import Vue from 'vue'
import Router from "vue-router";
// import firebase from 'firebase';
// import Userauth from '../auth/js/index'

import Body from '../components/body'
import Auth from '../auth/auth'

/* Auth */
import login from '../auth/login'
import callback from '../pages/callback'
import Register from '../auth/register'

/* FAQ */
import Faq from '../pages/faq'

/* Support Ticket */
import Support from '../pages/support'

/* maintenance */
import Maintenance from '../pages/maintenance'

/* Error Pages */
import Error400 from '../errors/error_400'
import Error401 from '../errors/error_401'
import Error403 from '../errors/error_403'
import Error404 from '../errors/error_404'
import Error500 from '../errors/error_500'
import Error503 from '../errors/error_503'

/* comingsoon */
import ComingsoonSimple from '../pages/comingsoon/comingsoon_simple'
import ComingsoonImage from '../pages/comingsoon/comingsoon_image'
import ComingsoonVideo from '../pages/comingsoon/comingsoon_video'

/* Dashboards */
import Default from '../pages/dashboard/default'
import Ecommerce from '../pages/dashboard/ecommerce'
import Dashboard1 from '../pages/dashboard/dashboard1'

/* Widgets */
import GeneralWidgets from '../pages/widgets/general_widgets'
import ChartWidgets from '../pages/widgets/chart_widgets'

/* projects */
import projectlist from '../pages/project/project-list'
import createproject from '../pages/project/create-project'

/* uikits */
import alert from '../pages/uikits/alert'
import Statecolor from '../pages/uikits/state_color'
import Helperclasses from '../pages/uikits/helper_classes'
import Avatars from '../pages/uikits/avatars'
import Grid from '../pages/uikits/grid'
import Tagpills from '../pages/uikits/tag_pills'
import Typography from '../pages/uikits/typography'
import Progressbar from '../pages/uikits/progress_bar'
import Modal from '../pages/uikits/modal'
import Popover from '../pages/uikits/popover'
import Tooltip from '../pages/uikits/tooltip'
import Spinners from '../pages/uikits/loader'
import Dropdown from '../pages/uikits/dropdown'
import Accordion from '../pages/uikits/accordion'
import Boxshadow from '../pages/uikits/box_shadow'
import Lists from '../pages/uikits/lists'
/* advance */
import Scrollable from '../pages/advance/scrollable'
import Sweetalert from '../pages/advance/sweetalert'
import Tree from '../pages/advance/tree'
import Rating from '../pages/advance/rating'
import Pagination from '../pages/advance/pagination'
import Ribbons from '../pages/advance/ribbons'
import Tour from '../pages/advance/tour'
import Rangeslider from '../pages/advance/range_slider'
import Breadcrumb from '../pages/advance/breadcrumb'
import Dropzone from '../pages/advance/dropzone'
import Upload from '../pages/advance/upload'
import Sticky from '../pages/advance/sticky'
import Toastr from '../pages/advance/toastr'
import ImageCropper from '../pages/advance/image_cropper'
import Draganddrop from '../pages/advance/draganddrop'
/* charts */
import GoogleChart from '../pages/charts/google_chart'
import Chartjs from '../pages/charts/chartjs'
import Chartist from '../pages/charts/chartist'
/* icons */
import Flag from '../pages/icons/flag'
import Ico from '../pages/icons/ico_icon'
import Themify from '../pages/icons/themify_icon'
import Fontawesome from '../pages/icons/font_awesome'
import FeatherIcon from '../pages/icons/feather_icon'
import WhetherIcon from '../pages/icons/weather'

/* Buttons */
import Default_buttons from '../pages/buttons/default_buttons'
import Flat_buttons from '../pages/buttons/flat_buttons'
import Edge_buttons from '../pages/buttons/edge_buttons'
import Raised_buttons from '../pages/buttons/raised_buttons'
import Group_buttons from '../pages/buttons/group_buttons'
/* Form */
import FormWizrd from '../pages/forms/form_wizard'
import FormValidation from '../pages/forms/form_validation'
import FormBaseInputs from '../pages/forms/form_base_inputs'
import FormCheckboxRadio from '../pages/forms/form_checkbox_radio'
import FormInputGroups from '../pages/forms/form_input_groups'
import FormMegaOptions from '../pages/forms/form_mega_options'
/* Form Widgets */
import FormDatepicker from '../pages/form_widgets/datepicker'
import FormSelect2 from '../pages/form_widgets/select2'
import FormSwitch from '../pages/form_widgets/switch'
import FormTypeahead from '../pages/form_widgets/typeahead'
import FormClipboard from '../pages/form_widgets/clipboard'
import FormTouchspin from '../pages/form_widgets/touchspin'
/* E-Commerce */
import Products from '../pages/ecommerce/products'
import ProductDetails from '../pages/ecommerce/product_details'
import Cart from '../pages/ecommerce/cart'
import Wishlist from '../pages/ecommerce/wishlist'
import Checkout from '../pages/ecommerce/checkout'
import Invoice from '../pages/ecommerce/invoice'
import Success from '../pages/ecommerce/success'
import OrderHistory from '../pages/ecommerce/order_history'
import PaymentDetails from '../pages/ecommerce/payment_details'
/* Chat */
import Chat from '../pages/chat/chat'
import Videochat from '../pages/chat/videochat'
/* Email  */
import Email from '../pages/email/app'
/* File Manager  */
import FileManager from '../pages/filemanager'
/* Kanban board */
import Kanban from '../pages/kanban'
/* Cards */
import Basic from '../pages/cards/basic'
import Creative from '../pages/cards/creative'
import Tabbed from '../pages/cards/tabbed'
import Draggable from '../pages/cards/draggable'

/* pricing */
import Pricing from '../pages/pricing/pricing'
/* sample page */
import SamplePage from '../pages/sample_page'
import Todo from '../pages/todo/todo'
import FirebaseTodo from '../pages/todo/firebase_todo'
/* bootstrap tables */
import BootstrapBasic from '../pages/tables/bootstrap/basic'
import BootstrapSizing from '../pages/tables/bootstrap/sizing'
import BootstrapBorder from '../pages/tables/bootstrap/border'
import BootstrapStyling from '../pages/tables/bootstrap/styling'
/* datatable tables */
import DatatableBasic from '../pages/tables/datatable/basic_init'
import DatatableSelectDelete from '../pages/tables/datatable/select_delete'
import FilterTable from '../pages/tables/datatable/filter'
import DatatableExport from '../pages/tables/datatable/data_export'
/* Bookmark */
import Bookmark from '../pages/bookmark'
/* calendar */
import Calendar from '../pages/calendar/fullcalendar'
/* Timeline */
import TimelineOne from '../pages/timeline/timeline_one'

/* vuejs smart table */
import SmartTable from '../pages/tables/vuejs_smart_table/basic'

/* Editor */
import SimpleEditor from '../pages/editor/simple_editor'
import CkEditor from '../pages/editor/ckeditor.vue'


/* User Profile */
import UserProfile from '../pages/users/profile'
import UserEditProfile from '../pages/users/edit-profile'
import UserCards from '../pages/users/cards'

/* Blogs */
import Blog from '../pages/blogs/blog'
import BlogSingle from '../pages/blogs/blog_single'

/* Maps */
import GoogleMaps from '../pages/maps/vue_google_maps'
import VueLeaflet from '../pages/maps/vue_leaflet'

/* Job Search */
import JobList from '../pages/job/job_list'
import JobDetails from '../pages/job/job_details'
import JobApply from '../pages/job/job_apply'

/* Search */
import Search from '../pages/search'

/* Social App */
import Social from '../pages/social_app'

/* Authentication */
import LoginOne from '../pages/authentication/login_one'
import LoginTwo from '../pages/authentication/login_two'
import LoginValidate from '../pages/authentication/login_with_validation'
import RegisterImage from '../pages/authentication/register_image'
import RegisterImage2 from '../pages/authentication/register_image2'
import Unlock from '../pages/authentication/unlock'
import ForgetPassword from '../pages/authentication/forget_password'
import ResetPassword from '../pages/authentication/reset_password'

/* Learning */
import Learninglist from '../pages/learning/learninglist';
import Coursedetailed from '../pages/learning/coursedetailed';

/* knowledgebase */
import Knowledgebase from '../pages/knowledgebase/knowledgebase';

// Gallery
import GridGallery from '../pages/gallery/grid-gallery';
import GridGalleryDesc from '../pages/gallery/gallery-desc';
import GalleryMasonary from '../pages/gallery/masonary-gallery';
import GalleryMasonaryDesc from '../pages/gallery/masonary-desc';
import HoverEffect from '../pages/gallery/hover-effect';

/* Profile */

import MyProfile1 from '../pages/myprofile/my-profile1'
import EditProfile1 from '../pages/myprofile/edit-profile1'

/* END Profile */



// component

Vue.use(Router)

const routes = [
{ path: '', redirect: { name: 'dashboard1' }},
{
  path: '/dashboard',
  component: Body,
  meta: {
    requiresAuth: true
  },
  children: [
  {
    path: 'default',
    name: 'default',
    component: Default,
    meta: {
      title: 'Default Dashboard | M-Profile',
    }
  },
  {
    path: 'ecommerce',
    name: 'ecommerce',
    component: Ecommerce,
    meta: {
      title: 'Ecommerce Dashboard | M-Profile',
    }
  },
  {
    path: 'dashboard1',
    name: 'dashboard1',
    component: Dashboard1,
    meta: {
      title: 'Dashboard | M-Profile',
    }
  }
  ]
},
{
  path: '/widgets',
  component: Body,
  children: [
  {
    path: 'general',
    name: 'general',
    component: GeneralWidgets,
    meta: {
      title: 'General Widgets | M-Profile',
    }
  },
  {
    path: 'chart',
    name: 'chart',
    component: ChartWidgets,
    meta: {
      title: 'Chart Widgets | M-Profile',
    }
  },
  ]
},
{
  path: '/project',
  component: Body,
  children: [
  {
    path: 'projectlist',
    name: 'project-list',
    component: projectlist,
    meta: {
      title: 'Project List | M-Profile',
    }
  },
  {
    path: 'create-project',
    name: 'create-project',
    component: createproject,
    meta: {
      title: 'Create Project | M-Profile',
    }
  }
  ]
},
{
  path: '/uikits',
  component: Body,
  children: [
  {
    path: 'alert',
    name: 'alert',
    component: alert,
    meta: {
      title: 'Alert | M-Profile',
    }
  },
  {
    path: 'state-color',
    name: 'Statecolor',
    component: Statecolor,
    meta: {
      title: 'Statecolor | M-Profile',
    }
  },
  {
    path: 'helper-classes',
    name: 'Helperclasses',
    component: Helperclasses,
    meta: {
      title: 'Helperclasses | M-Profile',
    }
  },
  {
    path: 'avatars',
    name: 'Avatars',
    component: Avatars,
    meta: {
      title: 'Avatars | M-Profile',
    }
  },
  {
    path: 'grid',
    name: 'Grid',
    component: Grid,
    meta: {
      title: 'Grid | M-Profile',
    }
  },
  {
    path: 'tag-pills',
    name: 'Tagpills',
    component: Tagpills,
    meta: {
      title: 'Tagpills | M-Profile',
    }
  },
  {
    path: 'typography',
    name: 'Typography',
    component: Typography,
    meta: {
      title: 'Typography | M-Profile',
    }
  },
  {
    path: 'progress-bar',
    name: 'Progressbar',
    component: Progressbar,
    meta: {
      title: 'Progressbar | M-Profile',
    }
  },
  {
    path: 'modal',
    name: 'Modal',
    component: Modal,
    meta: {
      title: 'Modal | M-Profile',
    }
  },
  {
    path: 'popover',
    name: 'Popover',
    component: Popover,
    meta: {
      title: 'Popover | M-Profile',
    }
  },
  {
    path: 'tooltip',
    name: 'Tooltip',
    component: Tooltip,
    meta: {
      title: 'Tooltip | M-Profile',
    }
  },
  {
    path: 'loader',
    name: 'Spinners',
    component: Spinners,
    meta: {
      title: 'Spinners | M-Profile',
    }
  },
  {
    path: 'dropdown',
    name: 'Dropdown',
    component: Dropdown,
    meta: {
      title: 'Dropdown | M-Profile',
    }
  },
  {
    path: 'accordion',
    name: 'Accordion',
    component: Accordion,
    meta: {
      title: 'Accordion | M-Profile',
    }
  },
  {
    path: 'box-shadow',
    name: 'Boxshadow',
    component: Boxshadow,
    meta: {
      title: 'Boxshadow | M-Profile',
    }
  },
  {
    path: 'lists',
    name: 'Lists',
    component: Lists,
    meta: {
      title: 'Lists | M-Profile',
    }
  }
  ]
},
{
  path: '/advance',
  component: Body,
  children: [
  {
    path: 'scrollable',
    name: 'Scrollable',
    component: Scrollable,
    meta: {
      title: 'Scrollable | M-Profile',
    }
  },
  {
    path: 'sweetalert',
    name: 'Sweetalert',
    component: Sweetalert,
    meta: {
      title: 'Sweetalert | M-Profile',
    }
  },
  {
    path: 'tree',
    name: 'Tree',
    component: Tree,
    meta: {
      title: 'Tree | M-Profile',
    }
  },
  {
    path: 'rating',
    name: 'Rating',
    component: Rating,
    meta: {
      title: 'Rating | M-Profile',
    }
  },
  {
    path: 'pagination',
    name: 'Pagination',
    component: Pagination,
    meta: {
      title: 'Pagination | M-Profile',
    }
  },
  {
    path: 'ribbons',
    name: 'Ribbons',
    component: Ribbons,
    meta: {
      title: 'Ribbons | M-Profile',
    }
  },
  {
    path: 'tour',
    name: 'Tour',
    component: Tour,
    meta: {
      title: 'Tour | M-Profile',
    }
  },
  {
    path: 'range-slider',
    name: 'Rangeslider',
    component: Rangeslider,
    meta: {
      title: 'Rangeslider | M-Profile',
    }
  },
  {
    path: 'breadcrumb',
    name: 'Breadcrumb',
    component: Breadcrumb,
    meta: {
      title: 'Breadcrumb | M-Profile',
    }
  },
  {
    path: 'dropzone',
    name: 'Dropzone',
    component: Dropzone,
    meta: {
      title: 'Dropzone | M-Profile',
    }
  },
  {
    path: 'upload',
    name: 'Upload',
    component: Upload,
    meta: {
      title: 'Upload | M-Profile',
    }
  },
  {
    path: 'sticky',
    name: 'Sticky',
    component: Sticky,
    meta: {
      title: 'Sticky | M-Profile',
    }
  },
  {
    path: 'toastr',
    name: 'Toastr',
    component: Toastr,
    meta: {
      title: 'Toastr | M-Profile',
    }
  },
  {
    path: 'image-cropper',
    name: 'ImageCropper',
    component: ImageCropper,
    meta: {
      title: 'ImageCropper | M-Profile',
    }
  },
  {
    path: 'dragdrop',
    name: 'Draganddrop',
    component: Draganddrop,
    meta: {
      title: 'Draganddrop | M-Profile',
    }
  },
  ]
},
{
  path: '/chart',
  component: Body,
  children: [
  {
    path: 'google',
    name: 'Google Chart',
    component: GoogleChart,
    meta: {
      title: 'GoogleChart | M-Profile',
    }
  },
  {
    path: 'chartjs',
    name: 'Chart Js',
    component: Chartjs,
    meta: {
      title: 'Home Page - Example App',
      metaTags: [
      {
        name: 'description',
        content: 'The home page of our example app.'
      },
      {
        property: 'og:description',
        content: 'The home page of our example app.'
      }
      ]
    }
  },
  {
    path: 'chartist',
    name: 'Chartist',
    component: Chartist,
    meta: {
      title: 'Chartist | M-Profile',
    }
  },
  ]
},
{
  path: '/gallery',
  component: Body,
  children:[
    {
      path: 'grid-gallery',
      name: 'GridGallery',
      component:GridGallery,
      meta: {
        title: 'GridGallery | M-Profile',
      }
    },
    {
      path: 'gallery-desc',
      name: 'GridGalleryDesc',
      component:GridGalleryDesc,
      meta: {
        title: 'GridGalleryDesc | M-Profile',
      }
    },
    {
      path: 'gallery-masonary',
      name: 'GalleryMasonary',
      component:GalleryMasonary,
      meta: {
        title: 'GalleryMasonary | M-Profile',
      }
    },
    {
      path: 'gallery-masonary-desc',
      name: 'GalleryMasonaryDesc',
      component:GalleryMasonaryDesc,
      
    },
    {
      path: 'hover-effect',
      name: 'HoverEffect',
      component:HoverEffect,
      meta: {
        title: 'HoverEffect | M-Profile',
      }
    } 
  ]
},
{
  path: '/editor',
  component: Body,
  children:[
    {
      path: 'simple-editor',
      name: 'SimpleEditor',
      component:SimpleEditor,
      meta: {
        title: 'SimpleEditor | M-Profile',
      }
    },
    {
      path: 'ck-editor',
      name: 'CkEditor',
      component:CkEditor,
       meta: {
        title: 'CkEditor | M-Profile',
      }
      
    }
  ]
},
{
  path:'/users',
  component: Body,
  children:[
    {
      path: 'profile',
      name: 'UserProfile',
      component:UserProfile,
       meta: {
        title: 'serProfile | M-Profile',
      }
    },
    {
      path: 'edit',
      name: 'UserEditProfile',
      component:UserEditProfile,
       meta: {
        title: 'serEditProfile | M-Profile',
      }
    },
    {
      path: 'cards',
      name: 'UserCards',
      component:UserCards,
       meta: {
        title: 'serCards | M-Profile',
      }
    }
  ]
},
{
  path:'/blog',
  component: Body,
  children:[
    {
      path: 'details',
      name: 'Blog',
      component:Blog,
       meta: {
        title: 'log | M-Profile',
      }
    },
    {
      path: 'single',
      name: 'BlogSingle',
      component:BlogSingle,
       meta: {
        title: 'logSingle | M-Profile',
      }
    }
  ]
},
{
  path:'/maps',
  component: Body,
  children:[
    {
      path: 'vue-google-maps',
      name: 'GoogleMaps',
      component:GoogleMaps,
       meta: {
        title: 'oogleMaps | M-Profile',
      }
    },
    {
      path: 'vue-leaflet-maps',
      name: 'VueLeaflet',
      component:VueLeaflet,
       meta: {
        title: 'ueLeaflet | M-Profile',
      }
    }
  ]
},
{
  path: '/icons',
  component: Body,
  children:[
  {
    path: 'flag',
    name: 'Flag',
    component: Flag,
     meta: {
        title: 'Flag | M-Profile',
      }
  },
  {
    path: 'ico',
    name: 'Ico',
    component: Ico,
     meta: {
        title: 'Ico | M-Profile',
      }
  },
  {
    path: 'themify',
    name: 'Themify',
    component: Themify,
     meta: {
        title: 'Themify | M-Profile',
      }
  },
  {
    path: 'fontawesome',
    name: 'Fontawesome',
    component: Fontawesome,
     meta: {
        title: 'Fontawesome | M-Profile',
      }
  },
  {
    path: 'feather_icon',
    name: 'FeatherIcon',
    component: FeatherIcon,
     meta: {
        title: 'FeatherIcon | M-Profile',
      }
  },
  {
    path: 'whether',
    name: 'WhetherIcon',
    component: WhetherIcon,
     meta: {
        title: 'WhetherIcon | M-Profile',
      }
  }
  ]
},
{
  path: '/form',
  component: Body,
  children: [
  {
    path: 'wizard',
    name: 'FormWizard',
    component: FormWizrd,
     meta: {
        title: 'FormWizrd | M-Profile',
      }
  },
  {
    path: 'validation',
    name: 'FormValidation',
    component: FormValidation,
     meta: {
        title: 'FormValidation | M-Profile',
      }
  },
  {
    path: 'inputs',
    name: 'FormBaseInputs',
    component: FormBaseInputs,
     meta: {
        title: 'FormBaseInputs | M-Profile',
      }
  },
  {
    path: 'checkbox-radio',
    name: 'FormCheckboxRadio',
    component: FormCheckboxRadio,
     meta: {
        title: 'FormCheckboxRadio | M-Profile',
      }
  },
  {
    path: 'input-groups',
    name: 'FormInputGroups',
    component: FormInputGroups,
     meta: {
        title: 'FormInputGroups | M-Profile',
      }
  },
  {
    path: 'mega-options',
    name: 'FormMegaOptions',
    component: FormMegaOptions,
     meta: {
        title: 'FormMegaOptions | M-Profile',
      }
  },
  {
    path: 'datepicker',
    name: 'FormDatepicker',
    component: FormDatepicker,
     meta: {
        title: 'FormDatepicker | M-Profile',
      }
  },
  {
    path: 'select2',
    name: 'FormSelect2',
    component: FormSelect2,
     meta: {
        title: 'FormSelect2 | M-Profile',
      }
  },
  {
    path: 'switch',
    name: 'FormSwitch',
    component: FormSwitch,
     meta: {
        title: 'FormSwitch | M-Profile',
      }
  },
  {
    path: 'typeahead',
    name: 'FormTypeahead',
    component: FormTypeahead,
     meta: {
        title: 'FormTypeahead | M-Profile',
      }
  },
  {
    path: 'clipboard',
    name: 'FormClipboard',
    component: FormClipboard,
     meta: {
        title: 'FormClipboard | M-Profile',
      }
  },
  {
    path: 'touchspin',
    name: 'FormTouchspin',
    component: FormTouchspin,
     meta: {
        title: 'FormTouchspin | M-Profile',
      }
  },
  {
    path: 'mega-options',
    name: 'Form Mega Options',
    component: FormMegaOptions,
     meta: {
        title: 'FormMegaOptions | M-Profile',
      }
  }
  ]
},
{
  path: '/table',
  component: Body,
  children: [
  {
    path: 'basic',
    name: 'BootstrapBasic',
    component: BootstrapBasic,
     meta: {
        title: 'BootstrapBasic | M-Profile',
      }
  },
  {
    path: 'sizing',
    name: 'BootstrapSizing',
    component: BootstrapSizing,
     meta: {
        title: 'BootstrapSizing | M-Profile',
      }
  },
  {
    path: 'border',
    name: 'BootstrapBorder',
    component: BootstrapBorder,
     meta: {
        title: 'BootstrapBorder | M-Profile',
      }
  },
  {
    path: 'styling',
    name: 'BootstrapStyling',
    component: BootstrapStyling,
     meta: {
        title: 'BootstrapStyling | M-Profile',
      }
  },
  {
    path: '/datatable-basic',
    name: 'DatatableBasic',
    component: DatatableBasic,
     meta: {
        title: 'DatatableBasic | M-Profile',
      }
  },
  {
    path: '/datatable-select-delete',
    name: 'DatatableSelectDelete',
    component: DatatableSelectDelete,
     meta: {
        title: 'DatatableSelectDelete | M-Profile',
      }
  },
  {
    path: '/filter-table',
    name: 'FilterTable',
    component: FilterTable,
     meta: {
        title: 'FilterTable | M-Profile',
      }
  },
  {
    path: '/datatable-export',
    name: 'DatatableExport',
    component: DatatableExport,
     meta: {
        title: 'DatatableExport | M-Profile',
      }
  },
  {
    path: 'smarttable',
    name: 'SmartTable',
    component: SmartTable,
     meta: {
        title: 'SmartTable | M-Profile',
      }
  },
  ]
},
{
  path: '/buttons',
  component: Body,
  children:[
  {
    path: 'default',
    name: 'default_buttons',
    component: Default_buttons,
     meta: {
        title: 'Default_buttons | M-Profile',
      }
  },
  {
    path: 'flat',
    name: 'flat_buttons',
    component: Flat_buttons,
     meta: {
        title: 'Flat_buttons | M-Profile',
      }
  },
  {
    path: 'edge',
    name: 'edge_buttons',
    component: Edge_buttons,
     meta: {
        title: 'Edge_buttons | M-Profile',
      }
  },
  {
    path: 'raised',
    name: 'raised_buttons',
    component: Raised_buttons,
     meta: {
        title: 'Raised_buttons | M-Profile',
      }
  },
  {
    path: 'group',
    name: 'group_buttons',
    component: Group_buttons,
     meta: {
        title: 'Group_buttons | M-Profile',
      }
  }
  ]
},
{
  path: '/ecommerce',
  component: Body,
  children: [

  {
    path: 'product',
    name: 'Product',
    component: Products,
     meta: {
        title: 'Products | M-Profile',
      }
  },
  {
    path: 'details/:id',
    name: 'Product Details',
    component: ProductDetails,
     meta: {
        title: 'ProductDetails | M-Profile',
      }
  },
  {
    path: 'cart',
    name: 'Cart',
    component: Cart,
     meta: {
        title: 'Cart | M-Profile',
      }
  },
  {
    path: 'wishlist',
    name: 'Wishlist',
    component: Wishlist,
     meta: {
        title: 'Wishlist | M-Profile',
      }
  },
  {
    path: 'checkout',
    name: 'Checkout',
    component: Checkout,
     meta: {
        title: 'Checkout | M-Profile',
      }
  },
  {
    path: 'invoice',
    name: 'Invoice',
    component: Invoice,
     meta: {
        title: 'Invoice | M-Profile',
      }
  },
  {
    path: 'success',
    name: 'Success',
    component: Success,
     meta: {
        title: 'Success | M-Profile',
      }
  },
  {
    path: 'order/history',
    name: 'Order History',
    component: OrderHistory,
     meta: {
        title: 'OrderHistory | M-Profile',
      }
  },
  {
    path: 'payment/details',
    name: 'payment Details',
    component: PaymentDetails,
     meta: {
        title: 'PaymentDetails | M-Profile',
      }
  },
  ]
},
{
  path:'/cards',
  component:Body,
  children:[
  {
    path:'basic',
    name:'Basic',
    component:Basic,
    meta: {
      title: 'BootstrapStyling | M-Profile',
    }
  },
  {
    path:'creative',
    name:'Creative',
    component:Creative,
    meta: {
      title: 'Creative | M-Profile',
    }
  },
  {
    path:'tabbed',
    name:'Tabbed',
    component:Tabbed,
    meta: {
      title: 'Tabbed | M-Profile',
    }
  },
  {
    path:'draggable',
    name:'Draggable',
    component:Draggable,
    meta: {
      title: 'Draggable | M-Profile',
    }
  }
  ]
},
{
  path: '/app',
  component: Body,
  children: [
  {
    path: 'todo',
    name: 'todo',
    component: Todo,
     meta: {
        title: 'Todo | M-Profile',
      }
  },
  {
    path: 'firebase-todo',
    name: 'FirebaseTodo',
    component: FirebaseTodo,
     meta: {
        title: 'FirebaseTodo | M-Profile',
      }
  },
  {
    path: 'chat',
    name: 'chat',
    component: Chat,
     meta: {
        title: 'Chat | M-Profile',
      }
  },
  {
    path: 'videochat',
    name: 'Video chat',
    component: Videochat,
     meta: {
        title: 'Video Chat | M-Profile',
      }
  },
  {
    path: 'email',
    name: 'Email',
    component: Email,
     meta: {
        title: 'Email, | M-Profile',
      }
  },
  {
    path: 'filemanager',
    name: 'File Manager',
    component: FileManager,
     meta: {
        title: 'File Manager, | M-Profile',
      }
  },
  {
    path: 'kanban',
    name: 'Kanban Board',
    component: Kanban,
     meta: {
        title: 'Kanban Board, | M-Profile',
      }
  },
  {
    path:'bookmark',
    name:'Bookmark',
    component:Bookmark,
    meta: {
      title: 'Bookmark | M-Profile',
    }
  },
  {
    path:'calendar',
    name:'Calendar',
    component:Calendar,
    meta: {
      title: 'Calendar | M-Profile',
    }
  }
  ]
},
{
  path: '/timeline',
  component: Body,
  children: [
  {
    path: 'one',
    name: 'TimelineOne',
    component: TimelineOne,
     meta: {
        title: 'TimelineOne | M-Profile',
      }
  }
  ]
},
{
  path: '/auth',
  component: Auth,
  children: [
  {
    path: 'login',
    name: 'Login 1',
    component: login,
    meta: {
      title: ' login | M-Profile',
    }
  },
  {
    path: 'register',
    name: 'register 1',
    component: Register,
    meta: {
      title: ' Register | M-Profile',
    }
  }
  ]
},
{
  path: '/pages',
  component: Body,
  children:[
    {
      path:'/pages/sample-page',
      name:'SamplePage',
      component:SamplePage,
      meta: {
        title: 'SamplePage | M-Profile',
      }
    },
    {
      path:'/pages/pricing',
      name:'Pricing',
      component:Pricing,
      meta: {
      title: 'Pricing | M-Profile',
    }
    }
  ]
},
{
  path: '/callback',
  name: 'callback',
  component: callback,
  meta: {
      title: 'Auth0',
  }
},
{
  path: '/pages',
  component: Body,
  children:[
    {
      path:'/pages/faq',
      name:'Faq',
      component:Faq,
      meta: {
      title: 'Faq | M-Profile',
    }
    },
    {
      path:'/pages/support',
      name:'Support',
      component:Support,
      meta: {
      title: 'Support | M-Profile',
    }
    },
    {
      path:'/pages/social-app',
      name:'Social',
      component:Social,
      meta: {
      title: 'Social | M-Profile',
    }
    }
  ]
},
{
  path:'/job',
  component:Body,
  children:[
    {
      path:'/job/list',
      name:'JobList',
      component:JobList,
      meta: {
      title: 'JobList | M-Profile',
    }
    },
    {
      path:'/job/details/:id',
      name:'JobDetails',
      component:JobDetails,
      meta: {
      title: 'JobDetails, | M-Profile',
    },
      props:true
    },
    {
      path:'/job/apply/:id',
      name:'JobApply',
      component:JobApply,
      meta: {
      title: 'JobApply, | M-Profile',
    },
      props:true
    }
  ]
},
{
  path:'/search',
  component:Body,
  children:[
    {
      path:'/pages/search',
      name:'Search',
      component:Search,
      meta: {
        title: 'Search | M-Profile',
      }
    }
  ]
},
{
  path:'/learning',
  component:Body,
  children:[
    {
      path:'/learning/list',
      name:'Learninglist',
      component:Learninglist,
      meta: {
        title: 'Learninglist | M-Profile',
      }
    },
    {
      path:'/learning/details/:id',
      name:'Coursedetailed',
      component:Coursedetailed,
      meta: {
      title: 'Coursedetailed, | M-Profile',
      },
      props:true
    }
  ]
},
{
  path:'/knowledgebase',
  component:Body,
  children:[
    {
      path:'/',
      name:'Knowledgebase',
      component:Knowledgebase,
      meta: {
      title: 'Knowledgebase | M-Profile',
    }
    }
  ]
},
{
  path:'/error-400',
  name:'Error400',
  component:Error400,
  meta: {
      title: 'Error400 | M-Profile',
    }
},
{
  path:'/error-401',
  name:'Error401',
  component:Error401,
  meta: {
      title: 'Error401 | M-Profile',
    }
},
{
  path:'/error-403',
  name:'Error403',
  component:Error403,
  meta: {
      title: 'Error403 | M-Profile',
    }
},
{
  path:'/error-404',
  name:'Error404',
  component:Error404,
  meta: {
      title: 'Error404 | M-Profile',
    }
},
{
  path:'/error-500',
  name:'Error500',
  component:Error500,
  meta: {
      title: 'Error500 | M-Profile',
    }
},
{
  path:'/error-503',
  name:'Error503',
  component:Error503,
  meta: {
      title: 'Error503 | M-Profile',
    }
},
{
  path:'/maintenance',
  name:'Maintenance',
  component:Maintenance,
  meta: {
      title: 'Maintenance | M-Profile',
    }
},
{
  path:'/comingsoon/comingsoon-simple',
  name:'ComingsoonSimple',
  component:ComingsoonSimple,
  meta: {
      title: 'ComingsoonSimple | M-Profile',
    }
},
{
  path:'/comingsoon/comingsoon-image',
  name:'ComingsoonImage',
  component:ComingsoonImage,
  meta: {
      title: 'ComingsoonImage | M-Profile',
    }
},
{
  path:'/comingsoon/comingsoon-video',
  name:'ComingsoonVideo',
  component:ComingsoonVideo,
  meta: {
      title: 'ComingsoonVideo | M-Profile',
    }
},
{
  path:'/authentication/login/one',
  name:'LoginOne',
  component:LoginOne,
  meta: {
      title: 'LoginOne | M-Profile',
    }
},
{
  path:'/authentication/login/two',
  name:'LoginTwo',
  component:LoginTwo,
  meta: {
      title: 'LoginTwo | M-Profile',
    }
},
{
  path:'/authentication/login/validate',
  name:'LoginValidate',
  component:LoginValidate,
  meta: {
      title: 'LoginValidate | M-Profile',
    }
},
{
  path:'/authentication/register/image',
  name:'RegisterImage',
  component:RegisterImage,
  meta: {
      title: 'RegisterImage | M-Profile',
    }
},
{
  path:'/authentication/register/image2',
  name:'RegisterImage2',
  component:RegisterImage2,
  meta: {
      title: 'RegisterImage2 | M-Profile',
    }
},
{
  path:'/authentication/unlockuser',
  name:'Unlock',
  component:Unlock,
  meta: {
      title: 'Unlock | M-Profile',
    }
},
{
  path:'/authentication/forgetpassword',
  name:'ForgetPassword',
  component:ForgetPassword,
  meta: {
      title: 'ForgetPassword | M-Profile',
    }
},
{
  path:'/authentication/resetpassword',
  name:'ResetPassword',
  component:ResetPassword,
  meta: {
      title: 'ResetPassword | M-Profile',
    }
},

{
  path:'/myprofile',
  component: Body,
  children:[
    {
      path: 'myprofile1',
      name: 'myprofile1',
      component:MyProfile1,
       meta: {
        title: 'MyProfile | M-Profile',
      }
    },
    {
      path: 'editprofile1',
      name: 'editprofile1',
      component:EditProfile1,
       meta: {
        title: 'EditProfile | M-Profile',
      }
    }
  ]
},


];

const router = new Router({
  routes,
  base: '/',
  mode: 'history',
  linkActiveClass: "active",
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
});


// router.beforeEach((to, from, next) => {
//   // firebase.auth().onAuthStateChanged(() => {
//     if(to.meta.title)
//       document.title = to.meta.title;
//     // const CurrentUser = firebase.auth().currentUser;    
//     const  path = ['/auth/login','/auth/register'];
//     if (path.includes(to.path) || to.path === "/callback" ){
//       return next();
//     }
//     next('/auth/login')
//   // });
// });

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/auth/login','/auth/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/auth/login');
  }

  next();
});

export default router
