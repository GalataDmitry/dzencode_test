import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom"
import App from './components/app/App'
import {store} from "./toolkit/store"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './index.css'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
)