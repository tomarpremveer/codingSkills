import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import proxy from 'express-http-proxy';

const app = new express()

app.use('/api', proxy('http://react-ssr-app.herokuapp.com', {
    proxyReqOptDecorator(opts) {
        opts.headers['x-forward-port'] = 'localhost:3000';
        return opts;
    }
}))

app.use(express.static('public'))


app.get('*', (req, res) => {
    const store = createStore();
    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData ? route.loadData(store) : null;
    })
    Promise.all(promises).then(() => {
        res.send(renderer(req, store));
    })
})

app.listen(3000, () => {
    console.log('connected to server')
})