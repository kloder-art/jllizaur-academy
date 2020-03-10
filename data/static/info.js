import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelopeOpenText } from 'react-icons/fa';

export default {
  address: {
    icon: <FaMapMarkerAlt />,
    url: 'https://goo.gl/maps/4hAaLR1irrCzRGCCA',
    content: (
      <>
        Calle Altamira, 54, Bajo Derecha. <br />
        04005 Almería.
      </>
    ),
  },
  email: {
    icon: <FaEnvelopeOpenText />,
    url: 'mailto:javierlopezlizaur15@gmail.com',
    content: 'javierlopezlizaur15@gmail.com',
  },
  phone: {
    icon: <FaPhone />,
    url: 'tel:+34670884415',
    content: '+34 670 88 44 15',
  },
};
