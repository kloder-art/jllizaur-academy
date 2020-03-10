import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import openHours from '../../../data/static/open-hours';

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
const currentDay = (moment().day() - 1) % 7;

const StyledOpenHours = styled.div`
  margin: 0 0 2rem;
`;

const StyledDay = styled.div`
  display: grid;
  grid-template-columns: 5rem 1fr 1fr;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  ${({ current }) => current && 'font-weight: bold;'}
  span:nth-child(2) {
    text-align: right;
  }
  span:nth-child(3) {
    text-align: right;
  }
`;

const OpenHours = () => (
  <StyledOpenHours>
    {openHours.map((day, idx) => (
      <StyledDay key={idx} current={currentDay === idx}>
        <span>{days[idx]}:</span>
        {day.map((hour, idx2) => (
          <span key={idx2}>
            {hour.from} - {hour.to}
          </span>
        ))}
      </StyledDay>
    ))}
  </StyledOpenHours>
);

export default OpenHours;
