import React, { Component } from 'react';
import circle from '../img/circle.png'; 
import trash from '../img/trash.png';
import spam from '../img/spam.png';

class MailContent extends Component{
    render(){
        return(
            <div class="mail-section">
                <div class="mail-section-subject">¿Qué es Lorem Ipsum?</div>
                <div class="mail-section-actions">
                    <img alt="" class="img-mail-actions" src={circle}/>
                    <img alt="" class="img-mail-actions" src={trash}/>
                    <img alt="" class="img-mail-actions" src={spam}/>
                </div>
                <div class="mail-section-content">
                    <div class="mail-body-sender">
                        Amazon.com <a class="link">&lt;noreplay@amazon.com&gt;</a><br/><br/>
                    </div>
                    <div class="mail-body-date">
                        Thursday, May 26, 11:09 A.M.
                    </div><br/>			
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.<br/><br/>
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                </div>
            </div>
        );
    }
}

export default MailContent;