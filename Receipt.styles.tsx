import styled from 'styled-components';

/* Content */
export const StyledContentWrapper = styled.div`
    width: 22rem;
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    position: relative;
`;

/* Bases */
export const StyledFirstBase = styled.div`
    border-radius: 17px;
    width: 100%;
    height: 2rem;

    box-shadow: inset 0px -6px 6px 0px #80808080;
`;

export const StyledSecondBase = styled.div`
    background-color: grey;
    margin: -19px 10px 1px 10px;
    z-index: 1;
    height: 0.5rem;
    border-radius: 5px;
    padding: 5px;

    div {
        background-color: black;
        margin-top: -2px;
        z-index: 1;
        height: 5px;
        border-radius: 5px;
        opacity: 0.6;
    }
`;

export const StyledLedgerBase = styled.div`
    background: white;
    border-radius: 14px;
    padding: 1.5rem;
    margin: -0.4rem 1.1rem;
    z-index: 2;
    padding-bottom: 3rem;
`;

export const StyledReceiptBase = styled.div`
    width: 100%;
    border-top: 1px solid #e6e6e6;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    background-color: white;
    z-index: 3;
    padding: 1rem;
    margin: -1rem 0rem;
    padding-bottom: 2rem;
`;

export const StyledDataReceiptWrapper = styled.div`
    box-shadow: 0px 0px 85px -70px #000, inset 0 66px 15px 0px #ccc, inset 0 99px 5px 0px #fff;
    margin: 0 1rem;
    z-index: 2;
`;

export const StyledMiniButton = styled.div`
    width: 8px;
    height: 3px;
    background-color: green;
    position: absolute;
    z-index: 3;
    margin: 4px 0px 0px 18.6rem;
    border-radius: 50%;
`;

export const StyledShadow = styled.div`
    z-index: 3;
    background: -webkit-linear-gradient(
        bottom,
        rgba(255, 255, 255, 0) 98.5%,
        rgba(0, 0, 0, 0.6) 100%
    );
    width: 81.5%;
    height: 100%;
    position: absolute;
    margin: 18px 17px 0px 17px;
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
`;

/* Footer */
export const StyledDownloadReceiptButton = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    z-index: 1;

    button {
        z-index: 10;
    }
`;

export const StyledGradientDiv = styled.div`
    z-index: 3;
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 10rem;
    background: -moz-linear-gradient(
        top,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 46%
    ); /* FF3.6+ */
    background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        color-stop(0%, rgba(255, 255, 255, 0)),
        color-stop(46%, rgba(255, 255, 255, 1))
    ); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(
        top,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 46%
    ); /* Chrome10+,Safari5.1+ */
`;
