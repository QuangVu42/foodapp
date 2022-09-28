import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Suspense, Fragment, useEffect } from 'react'

import publicRoutes from '../src/routes/Routes'
import Loading from './Loading/Loading'
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout'
import ScrollToTopRoute from './layouts/Scroll/ScrollToTopRoute/ScrollToTopRoute'
import ScrollToTop from './layouts/Scroll/ScrollToTop/ScrollToTop'

function App() {
  return (
    <Suspense fallback={<Loading />}>
       <Router >
            <div className="App">
                <ScrollToTopRoute />
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component
                        var Layout = DefaultLayout 
                        let ele = <Layout childern={<Page />}></Layout>

                        if (route.layout) {
                            Layout = route.layout;
                            ele = <Layout><Page /></Layout>
                             
                        } else if (route.layout === null) {
                            Layout = Fragment;
                            ele =  <Layout><Page /></Layout> 
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element= { ele }

                            />
                        );
                    })}
                </Routes>
            </div>
            <ScrollToTop />
        </Router>
    </Suspense>
  )
}

export default App;
