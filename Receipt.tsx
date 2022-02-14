import { VFC } from 'react';
import Image from 'next/image';

// IMAGES
import closeIcon from '@public/images/icons/close-icon.svg';

// STYLES
import {
    StyledContentWrapper,
    StyledDownloadReceiptButton,
    StyledFirstBase,
    StyledGradientDiv,
    StyledLedgerBase,
    StyledMiniButton,
    StyledSecondBase,
    StyledShadow,
} from './ReceiptModal.styles';

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
            closeIcon={<Image src={closeIcon} alt="close-icon" />}
            title="Receipt"
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
                    <p>Here it goes your text</p>
                </StyledLedgerBase>
            </StyledContentWrapper>

            {/* Buttons */}
            <StyledDownloadReceiptButton>
                <StyledGradientDiv />
                <UiButton text="Download receipt" onClick={modalHandler} />
            </StyledDownloadReceiptButton>
        </UiModal>
    );
};

export default ReceiptModal;
