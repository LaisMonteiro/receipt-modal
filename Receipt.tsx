import { VFC } from 'react';
import Image from 'next/image';

// IMAGES
import closeIcon from '@public/images/icons/close-icon.svg';

// STYLES
import {
    StyledContentWrapper,
    StyledDataReceiptWrapper,
    StyledDownloadReceiptButton,
    StyledFirstBase,
    StyledGradientDiv,
    StyledLedgerBase,
    StyledMiniButton,
    StyledReceiptBase,
    StyledSecondBase,
    StyledShadow,
} from './Receipt.styles';

// RECEIPT MODAL UTILS
interface IReceiptModalProps {
    modalHandler: () => void;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

// RECEIPT MODAL COMPONENT
const ReceiptModal: VFC<IReceiptModalProps> = ({ modalHandler, isOpen, setIsOpen }) => {
    /* Render */
    return (
        <UiModal
            openModal={isOpen}
            setOpenModal={() => setIsOpen(!isOpen)}
            closeIcon={closeIcon}
            title="Comprovante"
        >
            <StyledContentWrapper>
                {/* First Base */}
                <StyledFirstBase />
                <StyledMiniButton />
                <StyledSecondBase>
                    <div />
                </StyledSecondBase>
                <StyledShadow />
                <StyledLedgerBase>
                    <p>Pagamento realizado</p>
                    <span>{date}</span>
                </StyledLedgerBase>

                {/* Secont Base */}
                <StyledDataReceiptWrapper>
                    <StyledReceiptBase>
                        <p>Valor Pago</p>
                        <b>{value}</b>
                    </StyledReceiptBase>
                    <StyledReceiptBase>
                        <p>Dados de pagamento</p>
                        <p>
                            <b>Data de vencimento: </b>
                            <span>{date}</span>
                        </p>
                        <p>
                            <b>Descrição: </b>
                            <span>{description}</span>
                        </p>
                    </StyledReceiptBase>
                    <StyledReceiptBase>
                        <p>Dados do beneficiário</p>
                        <p>
                            <b>Nome: </b>
                            <span>{name}</span>
                        </p>
                        <p>
                            <b>CPF/CNPJ: </b>
                            <span>{cnpj}</span>
                        </p>
                    </StyledReceiptBase>
                    <StyledReceiptBase>
                        <p>Dados do pagador</p>
                        <p>
                            <b>Nome: </b>
                            <span>{name}s</span>
                        </p>
                        <p>
                            <b>CPF/CNPJ: </b>
                            <span>{cnpj}</span>
                        </p>
                    </StyledReceiptBase>
                    <StyledReceiptBase>
                        <p>Dados do pagador final</p>
                        <p>
                            <b>Nome: </b>
                            <span>{name}</span>
                        </p>
                        <p>
                            <b>CPF/CNPJ: </b>
                            <span>{cnpj}</span>
                        </p>
                    </StyledReceiptBase>
                </StyledDataReceiptWrapper>
            </StyledContentWrapper>

            {/* Buttons */}
            <StyledDownloadReceiptButton>
                <StyledGradientDiv />
                <UiButton text="Baixar comprovante" onClick={modalHandler} />
            </StyledDownloadReceiptButton>
        </UiModal>
    );
};

export default ReceiptModal;
