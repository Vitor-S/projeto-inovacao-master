import styled from "styled-components";

const light = '#8289f5'
const middle = '#4a59e0'
const middle_purple = '#4B31DE'

const shadow = '-webkit-box-shadow: 0px 0px 19px 0px rgba(11,7,89,1); -moz-box-shadow: 0px 0px 19px 0px rgba(11,7,89,1); box-shadow: 0px 0px 19px 0px rgba(11,7,89,1);'

export const LoginWrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${middle};
    
    .form-wrapper{
        width: 65%;
        min-height: 502px;
        display: flex;
        ${shadow}
        
        .form-bg{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: ${middle_purple};
            flex: 2;

            img{
                width: 50%;
            }
        }

        .form-container{
            flex: 1;
            background-color: #fff;

            form{
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                padding: 0 20px;

                .inputs-container{
                    display: flex;
                    flex-direction: column;
                    gap: 40px;
                }

                input{
                    min-width: 300px;
                }
            }
        }
    }
`

export const RegWrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${middle};

    .container{
        width: 53%;
        height: 63%;
        display: flex;
        ${shadow}

        form{
            width: 100%;
            background-color: #FFF;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 1fr 10fr 1fr;
            padding: 20px;

            .title{
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .span-2{
                grid-column: span 2;
            }

            .input-container, .buttons-container{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                padding: 10px;
            }

            
        }
    }
`

export const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: ${middle};

    .container{
        display: flex;
        width: 80%;
        height: 80%;
        ${shadow}
        
        .sidebar-container{
            flex: 1.2;
        }
        
        .search-container{
            flex: 4;
        }
    }
`

export const CardWrapper = styled.div`
    width: 22%;
    height: 50%;
    min-width: 200px;
    min-height: 300px;
    background-color: #9793f5;
    border-radius: 5px;

    .card-container{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        .avatar-container{
            width: 40%;
            aspect-ratio: 1/1;

            .card-avatar{
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }

        .info-container{
            height: 45%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;

            .card-name{
                font-size: 1.2rem;
                font-weight: 500;
            }

            .icons{
                display: flex;
            }
        }
    }
`

export const SearchWrapper = styled.div`
    height: 100%;
    width: 100%;
    background-color: #fff;

    .input-container{
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 15px 0;
    }
    
    .cards-container{
        display: flex;
        flex-flow: wrap;
        justify-content: center;
        height: calc(100% - 136px);
        gap: 15px;
        overflow-y: scroll;
    }
`

export const TestWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${middle};
`

export const UserHeaderWrapper = styled.div`
    height: 80px;
    width: 100%;

    .uh-container{
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 15px;
        
        -webkit-box-shadow: 0px 0px 10px -5px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 10px -5px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 10px -5px rgba(0,0,0,0.75);
    }

    .user-container{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 15px;

        span{
            font-size: 1rem;
            color: #fff;
        }

        div:hover{
            scale: 1.05;
            cursor: pointer;
        }
    }

    .logout{
        color: #fff;
        opacity: 0.7;
        cursor: pointer;
        transition: 0.3s ease-out;
    }

    .logout:hover{
        opacity: 1;
    }
    
    
`
