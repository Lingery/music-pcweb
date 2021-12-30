import React from 'react';
import { Redirect } from 'react-router-dom';

import TQDiscover from "@/pages/discover";
import TQFriend from "@/pages/friend";
import TQMine from "@/pages/mine";
import TQRecommend from "@/pages/discover/c-pages/recommend";
import TQRanking from "@/pages/discover/c-pages/ranking";
import TQSongs from "@/pages/discover/c-pages/songs";
import TQDjradio from "@/pages/discover/c-pages/djradio";
import TQArtist from "@/pages/discover/c-pages/artist";
import TQAlbum from "@/pages/discover/c-pages/album";

const routes = [
    {
        path: '/',
        exact: true,
        render: () => (
            <Redirect to="/discover" />
        )
    },
    {
        path: '/discover',
        component: TQDiscover,
        routes: [
            {
                path: "/discover",
                exact: true,
                render: () => (
                    <Redirect to="/discover/recommend" />
                )
            },
            {
                path: "/discover/recommend",
                component: TQRecommend
            },
            {
                path: "/discover/ranking",
                component: TQRanking
            },
            {
                path: "/discover/songs",
                component: TQSongs
            },
            {
                path: "/discover/djradio",
                component: TQDjradio
            },
            {
                path: "/discover/artist",
                component: TQArtist
            },
            {
                path: "/discover/album",
                component: TQAlbum
            }
        ]
    }, 
    {
        path: '/friend',
        component: TQFriend
    },
    {
        path: '/mine',
        component: TQMine
    }
];

export default routes;