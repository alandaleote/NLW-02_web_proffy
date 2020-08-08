import React from 'react';
import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://begmetobuyit.com/application/css/images/noImage.jpg" alt='avatar' />
                <div>
                    <strong>Nome do Proffy</strong>
                    <span>Matéria</span>
                </div>
            </header>

            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, vero doloremque ea at velit eum qui perferendis voluptate? 
                <br/><br/>
                Tenetur qui earum molestiae cumque nesciunt nisi recusandae eos culpa vitae magnam.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 80,00</strong>
                </p>
                <button>
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;