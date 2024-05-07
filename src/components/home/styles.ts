import styled from 'styled-components';
import theme from '@/styles/theme';

export const HomeContainer = styled.main`
  display: flex;
  gap: 3rem;
  width: 100%;
  max-width: calc(100vw - ((100vw - 1180px) / 2));
  margin-left: auto;
  min-height: 656px;
`;

export const Product = styled.a`
  background: linear-gradient(180deg, #1ea483 0%, #7465d4 100%);
  border-radius: 8px;
  padding: 0.25rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: cover;
  }

  footer {
    position: absolute;
    bottom: 0.25rem;
    left: 0.25rem;
    right: 0.25rem;
    padding: 2rem;

    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: rgba(0, 0, 0, 0.6);

    transform: translateY(110%);
    opacity: 0;
    transition: all 0.2s ease-in-out;

    strong {
      font-size: 1.5rem;
    }

    span {
      font-size: 1.25rem;
      font-weight: bold;
      color: #00b37e;
    }
  }

  &:hover {
    footer {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;
