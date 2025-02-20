//@ts-check
import { Outlet } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Home from './pages/Home'
import Error from './pages/Error'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import store from './app/store'
import { Provider } from 'react-redux'
import ListProperties from './components/ListProperties'
import SignUpForm from './SignupForm'
import LoginForm from './LoginForm'
import CreateProperty from './components/CreateProperty'
//import DashApp from './components/Dashboard/DashboardComponents/DashApp'
import PropertyDetails from './components/PropertyDetails'
import UpdateReservation from './components/UpdateReservation'
import ListReservations from './components/ListReservations'
import CreateReservation from './components/CreateReservation'
import ReservationDetail from './components/ReservationDetails'
import UpdateProperty from './components/UpdateProperty'
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            { index: true, element: <Home /> },
            { path: 'properties', element: <ListProperties /> },
            { path: 'properties/:id', element: <PropertyDetails /> },
            { path: 'signup', element: <SignUpForm /> },
            { path: 'login', element: <LoginForm /> },
            { path: 'createproperty', element: <CreateProperty /> },
            //{ path: 'dashboard', element: <Dashboard /> },
            { path: 'reservations', element: <ListReservations />},
            { path: 'reservations/:id', element: <ReservationDetail />},
            { path: 'createreservation/:propertyId', element: <CreateReservation />},
            { path: 'reservations/:id/update', element: <UpdateReservation /> },
            { path: 'properties/:id/update', element: <UpdateProperty /> },
        ],
    },
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
)
