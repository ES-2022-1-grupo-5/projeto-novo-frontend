import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { GroupCard } from '.';
import VolleyballIcon from '../../assets/icons/volleyball.svg';

describe('GroupCard test', () => {
  describe('Minimal Props', () => {
    beforeEach(() => {
      render(<GroupCard name="Test Group" />);
    });

    test('Should show group name', () => {
      expect(screen.getByText('Test Group')).toBeDefined();
    });

    test('Should show default icon', () => {
      expect(screen.getByAltText('basketball')).toBeDefined();
    });

    test('Should show default slots', () => {
      expect(screen.getByText('0 VAGAS DISPONÍVEIS')).toBeDefined();
    });
  });

  describe('All Props', () => {
    beforeEach(() => {
      render(<GroupCard name="Test Group" slots={10} icon={VolleyballIcon} />);
    });

    test('Should show group name', () => {
      expect(screen.getByText('Test Group')).toBeDefined();
    });

    test('Should show slots', () => {
      expect(screen.getByText('10 VAGAS DISPONÍVEIS')).toBeDefined();
    });

    // TODO: Refactor the way to set external icons to the component, so we can test it properly
    test('Should show default icon', () => {
      expect(screen.getByAltText('basketball')).toBeDefined();
    });
  });
});
