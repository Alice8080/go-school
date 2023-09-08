import { UncontrolledAccordion, AccordionItem, AccordionHeader, AccordionBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './accordion.scss';

const CustomAccordion = ({ content }) => {

    return (
        <UncontrolledAccordion
            defaultOpen={[]}>
            {
                content.map((item, i) => {
                    return (
                    <AccordionItem key={item.id}>
                        <AccordionHeader targetId={item.id}>
                            {item.header}
                        </AccordionHeader>
                        <AccordionBody accordionId={item.id}>
                            {item.text}
                        </AccordionBody>
                    </AccordionItem>)
                })
            }
        </UncontrolledAccordion>
    );
}

export default CustomAccordion;