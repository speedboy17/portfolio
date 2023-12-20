import type { Meta, StoryObj } from '@storybook/vue3';
import EventTicket from '@/components/Organisms/EventTicket.vue';

const meta: Meta<typeof EventTicket> = {
  title: 'Organisms/EventTicket',
  component: EventTicket,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof EventTicket>;

export const Default: Story = {
  args: {
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Bvf_haarlem_11_hq.jpeg',
    title: 'Sample Event',
    country: 'Netherlands',
    startDate: new Date('10:00 May 31, 2023'),
    endDate: new Date('18:00 May 31, 2023'),
    numPeople: '2 Adults',
    ticketHolder: 'John Doe',
    ticketType: 'VIP',
    orderId: 12345,
    barcodeSrc: 'https://cdn-dfhjh.nitrocdn.com/BzQnABYFnLkAUVnIDRwDtFjmHEaLtdtL/assets/images/optimized/rev-c133d21/wp-content/uploads/2015/02/barcode-13.png',
  },
};