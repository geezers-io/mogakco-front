import * as React from 'react';
import MButton, { ButtonSize, ButtonType, MButtonProps } from 'components/common/MButton';
import { AiOutlineCheck } from 'react-icons/ai';
import styled from '@emotion/styled';

export default {
  title: 'components/common/MButton',
  component: MButton,
};

const buttonSpec: Record<'standard' | 'square', { type: ButtonType[]; size: ButtonSize[] }> = {
  standard: {
    type: ['primary', 'secondary', 'text', 'semantic'],
    size: ['small', 'medium', 'regular', 'large'],
  },
  square: {
    type: ['primary', 'secondary', 'text', 'semantic'],
    size: ['squareSmall', 'squareMedium', 'squareRegular'],
  },
};

export const Standard = () => {
  return <ButtonSpecTable {...buttonSpec.standard} />;
};

export const Square = () => {
  return <ButtonSpecTable {...buttonSpec.square} />;
};

const ButtonSpecTable = ({ type, size }: { type: ButtonType[]; size: ButtonSize[] }) => (
  <TableContainer>
    <thead>
      {/* row header 1 */}
      <tr>
        <th />
        <th />

        {type.map((type) => (
          <th key={type}>{type}</th>
        ))}
      </tr>

      {/* row header 2 */}
      <tr>
        <th />
        <th />

        {type.map((type) => (
          <th key={type + '_'}>
            <table style={{ width: '100%' }}>
              <tbody>
                <tr>
                  <th>icon X</th>
                  <th>icon O</th>
                </tr>
              </tbody>
            </table>
          </th>
        ))}
      </tr>
    </thead>

    <tbody>
      {size.map((size) => (
        <tr key={size}>
          {/* column header 1 */}
          <th>{size}</th>

          {/* column header 2 */}
          <th style={{ height: '1px' }}>
            <table style={{ height: '100%' }}>
              <tbody>
                <tr>
                  <td>Default</td>
                </tr>
                <tr>
                  <td>Active</td>
                </tr>
                <tr>
                  <td>Disabled</td>
                </tr>
                <tr>
                  <td>Loading</td>
                </tr>
              </tbody>
            </table>
          </th>

          {type.map((type) => (
            <td key={type + size}>
              <Buttons type={type} size={size} />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </TableContainer>
);

const Buttons = ({ type, size }: MButtonProps) => (
  <ButtonGroup>
    <AlignRight>
      <MButtonBase size={size} type={type} />
    </AlignRight>
    <MButtonBase size={size} type={type} icon={<AiOutlineCheck />} />

    <AlignRight>
      <MButtonBase size={size} type={type} active />
    </AlignRight>
    <MButtonBase size={size} type={type} icon={<AiOutlineCheck />} active />

    <AlignRight>
      <MButtonBase size={size} type={type} disabled />
    </AlignRight>
    <MButtonBase size={size} type={type} icon={<AiOutlineCheck />} disabled />

    <AlignRight>
      <MButtonBase size={size} type={type} loading />
    </AlignRight>
    <MButtonBase size={size} type={type} icon={<AiOutlineCheck />} loading />
  </ButtonGroup>
);

const MButtonBase = (props: MButtonProps) => {
  if (props.size?.startsWith('square')) {
    if (props.icon) {
      return <MButton iconPlacement="left" {...props} />;
    }

    return <MButton {...props}>A</MButton>;
  }

  return (
    <MButton iconPlacement="left" {...props}>
      Button Text
    </MButton>
  );
};

const TableContainer = styled.table`
  border: 1px solid ${(p) => p.theme.palette.INK_30};

  th {
    background: ${(p) => p.theme.palette.INK_10};
    border: 1px solid ${(p) => p.theme.palette.INK_30};
    vertical-align: middle;
  }
  td {
    vertical-align: middle;
    border: 1px solid ${(p) => p.theme.palette.INK_30};
  }
  h1 {
    font-size: 20px;
    margin-top: 0;
    border-bottom: 1px solid ${(p) => p.theme.palette.INK_30};
  }
  h2 {
    font-size: 16px;
  }

  table {
    th {
      border: none;
    }
    td {
      border: none;
    }
  }
`;

const ButtonGroup = styled.div`
  padding: 5px;
  display: grid;
  grid-template-columns: max-content max-content;
  gap: 20px;
  place-content: center;
`;

const AlignRight = styled.div`
  display: flex;
  justify-content: flex-end;
`;
