import React from "react"
import AgileBoard from "./compontents/AgileBoard/AgileBoard"
import ErrorBoundary from "./compontents/ErrorBoundary/ErrorBoundary"
import Navigation from "./compontents/Navigation/Navigation"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import * as routerPaths from "./utility/router/paths"

const App: React.FC = props => {
    return (
        <ErrorBoundary>
            <Router>
                <Navigation />
                <Switch>
                    <Route path={routerPaths.agileBoardPath} component={AgileBoard} />
                    <Route
                        exact
                        path={routerPaths.rootPath}
                        render={() => {
                            return <Redirect to={routerPaths.agileBoardPath} />
                        }}
                    />
                </Switch>
            </Router>
        </ErrorBoundary>
    )
}

export default App
