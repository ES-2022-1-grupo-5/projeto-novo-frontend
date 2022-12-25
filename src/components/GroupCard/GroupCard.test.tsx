import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { GroupCard } from '.';
import VolleyballIcon from '../../assets/icons/volleyball.svg';

describe('GroupCard test', () => {
  describe('Minimal Props', () => {
    beforeEach(() => {
      render(<GroupCard name="Test Group" />);
    });

    it('Should show group name', () => {
      expect(screen.getByText('Test Group')).toBeDefined();
    });

    it('Should show default icon', () => {
      expect(screen.getByAltText('basketball')).toBeDefined();
    });

    it('Should show default slots', () => {
      expect(screen.getByText('0 VAGAS DISPONÍVEIS')).toBeDefined();
    });
  });

  describe('All Props', () => {
    beforeEach(() => {
      render(<GroupCard name="Test Group" slots={10} icon={VolleyballIcon} />);
    });

    it('Should show group name', () => {
      expect(screen.getByText('Test Group')).toBeDefined();
    });

    it('Should show slots', () => {
      expect(screen.getByText('10 VAGAS DISPONÍVEIS')).toBeDefined();
    });

    // TODO: Refactor the way to set external icons to the component, so we can test it properly
    // https://chakra-ui.com/docs/components/icon/usage#creating-your-custom-icons
    it('Should show default icon', () => {
      expect(screen.getByAltText('basketball')).toBeDefined();
    });
  });
});
