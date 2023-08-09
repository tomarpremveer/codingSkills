import express from 'express';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import { routes } from './client/routes';
import { Provider } from 'react-redux';
import reduxStore from './client/redux/reduxStore';
import serialize from 'serialize-javascript';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
    const content = renderToString(
        <Provider store={reduxStore}>
            <StaticRouter location={req.path} context={{}}>
                <Routes>
                    {routes.map((route) => (
                        <Route
                            path={route.path}
                            key={route.path}
                            element={route.element}
                        />
                    ))}
                </Routes>
            </StaticRouter>
        </Provider>
    );
    const html = `<html>
        <head>
            <title>1MG clone</title>
            <link rel="stylesheet" href="styles.css" />
            <script async src="bundle.js"></script>
        </head>
        <body>
        <div id="app">${content}</div>
         <script>
            window.__PRELOADED_STATE__ = ${serialize(reduxStore.getState())}
            </script>
        </body>
    </html>`;
    res.send(html);
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started on port 3000');
});
