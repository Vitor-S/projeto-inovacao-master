import React from 'react'
import styled from 'styled-components'

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { IconButton } from '@mui/material';

import { Cap } from '../utils/functions';

export default function Card({ data }) {

    const primary = data.supplier ? '#eb372a' : '#1369ce';

    const ProfileWrapper = styled.div`
        .card {
            width: 220px;
            padding: 25px 5px 50px;
            margin-bottom: 30px;
            background-color: #f7f5ec;
            text-align: center;
            overflow: hidden;
            position: relative;
            cursor: pointer;
        }
        
        .card .picture {
            display: inline-block;
            height: 130px;
            width: 130px;
            margin-bottom: 50px;
            z-index: 1;
            position: relative;
        }

        .card .picture::before {
            content: "";
            width: 100%;
            height: 0;
            border-radius: 50%;
            background-color: ${primary};
            position: absolute;
            bottom: 135%;
            right: 0;
            left: 0;
            opacity: 0.9;
            transform: scale(3);
            transition: all 0.3s linear 0s;
        }

        .card:hover .picture::before {
            height: 100%;
        }

        .card .picture::after {
            content: "";
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: ${primary};
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
        }

        .card .picture img {
            width: 100%;
            height: auto;
            border-radius: 50%;
            transform: scale(1);
            transition: all 0.9s ease 0s;
        }

        .card:hover .picture img {
            box-shadow: 0 0 0 14px #f7f5ec;
            transform: scale(0.7);
        }

        .card .title {
            display: block;
            font-size: 15px;
            color: #4e5052;
            text-transform: capitalize;
        }

        .card .social {
            width: 100%;
            padding: 0;
            margin: 0;
            background-color: ${primary};
            position: absolute;
            bottom: -100px;
            left: 0;
            transition: all 0.5s ease 0s;
        }

        .card:hover .social {
            bottom: 0;
        }

        .card .social li {
            display: inline-block;
        }

        .card .social li a:hover {
            color: ${primary};
        }
    `

    return (
        <ProfileWrapper Name="container">
            <div>
                <div className="card">

                    <div className="picture">
                        <img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png" />
                    </div>

                    <div className="card-content">
                        <h3 className="name">{Cap(data.name) + ' ' + Cap(data.surname)}</h3>
                        <h4 className="title">{data.area}</h4>
                    </div>
                    <ul className="social">
                        <li>
                            <IconButton>
                                <a target="blank_" href={`https://api.whatsapp.com/send?phone=${data.phone}`}>
                                    <WhatsAppIcon sx={{ color: '#a1f0bf' }} color='primary' />
                                </a>
                            </IconButton>
                        </li>
                        <li>
                            <IconButton onClick={() => window.location.href = "mailto:"+data.email}>
                                <EmailIcon
                                    sx={{ color: '#FACC5F' }} color='primary'/>
                            </IconButton>
                        </li>
                        <li>
                            <IconButton>
                                <a target='blank_' href='https://www.google.com.br/maps/place/3007020'>
                                    <LocationOnIcon sx={{ color: '#fa8989' }} color='primary'/>
                                </a>
                            </IconButton>
                        </li>
                    </ul>
                </div>
            </div>
        </ProfileWrapper>
    )
}
