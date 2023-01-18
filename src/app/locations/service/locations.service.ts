import { HttpService } from './../../shared/services/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  public stores: string = 'store';
  constructor(private api: HttpService) { }

  getStores() {
    return this.api.getData(this.stores + '/get-all-stores');
  }


  getStoresJson() {
    return [
      {
        id: 1, place: 'CANARY WHARF', phone: '020 3154 9901', address: '1 Westward Parade,Pepper Street,London, E14 9DZ',
        deliveroo: true, justeat: true, ubereats: true,
        geoLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.9234887486728!2d-0.016936584075287718!3d51.496271519337625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487602bda98ca3db%3A0x74da3498aad07120!2s1%20Westward%20Parade%2C%20Pepper%20St%2C%20London%20E14%209DZ%2C%20UK!5e0!3m2!1sen!2sin!4v1646657499769!5m2!1sen!2sin',
        timeTable: [
          { day: 'Monday', time: '11am - 11pm' },
          { day: 'Tuesday', time: '11am - 11pm' },
          { day: 'Wednesday', time: '11am - 11pm' },
          { day: 'Thursday', time: '11am - 11pm' },
          { day: 'Friday', time: '11am - 01am' },
          { day: 'Saturday', time: '11am - 01am' },
          { day: 'Sunday', time: '11am - 11pm' },
        ],
        deliveryPartner: [
          {
            name: 'deliveroo',
            orderLink: 'https://deliveroo.co.uk/menu/london/canary-wharf/the-sushi-co-westward-parade?day=today&geohash=gcpuzwsgfcc4&time=ASAP',
            logo: 'assets/images/delivery-partner/deliveroo.png',
            display: true
          },
          {
            name: 'justeat',
            orderLink: 'https://www.just-eat.co.uk/restaurants-thesushico-poplar/menu',
            logo: 'assets/images/delivery-partner/just-eat.png',
            display: true
          },
          {
            name: 'ubereats',
            orderLink: 'https://www.ubereats.com/gb/store/the-sushi-co-canary-wharf/IxuOy0TFXuiR1tTYfXIl7A',
            logo: 'assets/images/delivery-partner/uber-eats.png',
            display: true
          },
        ],
        descreption: 'Vivamus vel mi lorem. Sed vitae felis nisl, at venenatis tortor. In at velit ac turpis aliquam volutpat. Ut et nibh augue. Integer imperdiet convallis massa nec gravida. Sed eleifend porta urna. Present non nisi tellus, ut lobortis massa. Sed pretium pretium pretium elit et vulputate.'
      },
      {
        id: 2, place: 'CHISWICK', phone: '020 3875 5055', address: '320 Chiswick High Road,London,W4 5TA',
        deliveroo: true, justeat: true, ubereats: true,
        geoLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.1322814383675!2d-0.2649287840753849!3d51.492439969617685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760e6b23292e5b%3A0x5b3b80684696e811!2sChiswick%20High%20Rd%2C%20Chiswick%2C%20London%20W4%205TA%2C%20UK!5e0!3m2!1sen!2sin!4v1648638353838!5m2!1sen!2sin',
        timeTable: [
          { day: 'Monday', time: '11am - 11pm' },
          { day: 'Tuesday', time: '11am - 11pm' },
          { day: 'Wednesday', time: '11am - 11pm' },
          { day: 'Thursday', time: '11am - 11pm' },
          { day: 'Friday', time: '11am - 11pm' },
          { day: 'Saturday', time: '11am - 11pm' },
          { day: 'Sunday', time: '11am - 11am' },],
        deliveryPartner: [
          {
            name: 'deliveroo',
            orderLink: 'https://deliveroo.co.uk/menu/london/chiswick/the-sushi-co-chiswick-high-road?geohash=gcpucvj3nmzs',
            logo: 'assets/images/delivery-partner/deliveroo.png',
            display: true
          },
          {
            name: 'justeat',
            orderLink: 'https://www.just-eat.co.uk/restaurants-the-sushi-co-chiswick/menu',
            logo: 'assets/images/delivery-partner/just-eat.png',
            display: true
          },
          {
            name: 'ubereats',
            orderLink: 'https://www.ubereats.com/gb/store/the-sushi-co-chiswick/FZJy9c0yXqmw5LMr1j-kIg',
            logo: 'assets/images/delivery-partner/uber-eats.png',
            display: true
          },
        ],
        descreption: 'Vivamus vel mi lorem. Sed vitae felis nisl, at venenatis tortor. In at velit ac turpis aliquam volutpat. Ut et nibh augue. Integer imperdiet convallis massa nec gravida. Sed eleifend porta urna. Present non nisi tellus, ut lobortis massa. Sed pretium pretium pretium elit et vulputate.'

      },
      {
        id: 3, place: 'HOLBORN', phone: '020 3161 6100', address: '50 Grays Inn Road Holborn, London,WC1X 8LS',
        deliveroo: true, justeat: true, ubereats: true,
        geoLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.6369907953795!2d-0.11417478402783159!3d51.519875517611574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b4bfbf851c1%3A0x14b625803e5956af!2s50%20Grays%20Inn%20Rd%2C%20London%20WC1X%208LS%2C%20UK!5e0!3m2!1sen!2sin!4v1654258123196!5m2!1sen!2sin',
        timeTable: [
          { day: 'Monday', time: '11am - 11pm' },
          { day: 'Tuesday', time: '11am - 11pm' },
          { day: 'Wednesday', time: '11am - 11pm' },
          { day: 'Thursday', time: '11am - 04am' },
          { day: 'Friday', time: '11am - 04am' },
          { day: 'Saturday', time: '11am - 04am' },
          { day: 'Sunday', time: '11am - 11am' },],
        deliveryPartner: [
          {
            name: 'deliveroo',
            orderLink: 'https://deliveroo.co.uk/menu/london/farringdon/the-sushi-co-holborn?geohash=gcpvn5y8c975',
            logo: 'assets/images/delivery-partner/deliveroo.png',
            display: true
          },
          {
            name: 'justeat',
            orderLink: 'https://www.just-eat.co.uk/restaurants-the-sushi-co---holborn-london/menu',
            logo: 'assets/images/delivery-partner/just-eat.png',
            display: true
          },
          {
            name: 'ubereats',
            orderLink: 'https://www.ubereats.com/gb/store/the-sushi-co-holborn/ZiSGUhBtUuKmhMMH1IBINQ',
            logo: 'assets/images/delivery-partner/uber-eats.png',
            display: true
          },
        ],
        descreption: 'Vivamus vel mi lorem. Sed vitae felis nisl, at venenatis tortor. In at velit ac turpis aliquam volutpat. Ut et nibh augue. Integer imperdiet convallis massa nec gravida. Sed eleifend porta urna. Present non nisi tellus, ut lobortis massa. Sed pretium pretium pretium elit et vulputate.'

      },
      {
        id: 4, place: 'WOODFORD', phone: '020 8505 5942', address: '2 The Broadway,Woodford Green,IG8 0HL',
        deliveroo: true, justeat: true, ubereats: true,
        geoLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2477.856809249889!2d0.030959815974513034!3d51.607512211199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a0cfb1d07a51%3A0x76c4bf4c4efb42db!2s2%20Snakes%20Ln%20W%2C%20The%20Broadway%2C%20Woodford%2C%20Woodford%20Green%20IG8%200HL%2C%20UK!5e0!3m2!1sen!2sin!4v1655277592108!5m2!1sen!2sin',
        timeTable: [
          { day: 'Monday', time: '11am - 10pm' },
          { day: 'Tuesday', time: '11am - 10pm' },
          { day: 'Wednesday', time: '11am - 10pm' },
          { day: 'Thursday', time: '11am - 10pm' },
          { day: 'Friday', time: '11am - 11pm' },
          { day: 'Saturday', time: '11am - 11pm' },
          { day: 'Sunday', time: '11am - 10pm' },],
        deliveryPartner: [
          {
            name: 'deliveroo',
            orderLink: 'https://deliveroo.co.uk/menu/london/woodford/the-sushi-co-woodford-green',
            logo: 'assets/images/delivery-partner/deliveroo.png',
            display: true
          },
          {
            name: 'justeat',
            orderLink: 'https://www.just-eat.co.uk/restaurants-the-sushi-co-woodford-green/menu',
            logo: 'assets/images/delivery-partner/just-eat.png',
            display: true
          },
          {
            name: 'ubereats',
            orderLink: 'https://www.ubereats.com/gb/store/the-sushi-co-woodford/cLkuse46Tf-2Pp3_j-SwXA',
            logo: 'assets/images/delivery-partner/uber-eats.png',
            display: true
          },
        ],
        descreption: 'Vivamus vel mi lorem. Sed vitae felis nisl, at venenatis tortor. In at velit ac turpis aliquam volutpat. Ut et nibh augue. Integer imperdiet convallis massa nec gravida. Sed eleifend porta urna. Present non nisi tellus, ut lobortis massa. Sed pretium pretium pretium elit et vulputate.'

      },
      {
        id: 5, place: 'VICTORIA', phone: '020 3089 4988', address: '30 Upper Tachbrook Street,London,SW1V 1SW',
        deliveroo: true, justeat: true, ubereats: true,
        geoLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.502273630034!2d-0.13924127877784015!3d51.49312282642356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604e0154899f5%3A0x678ab3667164bf13!2sUpper%20Tachbrook%20St%2C%20Pimlico%2C%20London%20SW1V%201SW!5e0!3m2!1sen!2suk!4v1660136040556!5m2!1sen!2suk',
        timeTable: [
          { day: 'Monday', time: '11am - 11pm' },
          { day: 'Tuesday', time: '11am - 11pm' },
          { day: 'Wednesday', time: '11am - 11pm' },
          { day: 'Thursday', time: '11am - 11pm' },
          { day: 'Friday', time: '11am - 11pm' },
          { day: 'Saturday', time: '11am - 11pm' },
          { day: 'Sunday', time: '11am - 11pm' },],
        deliveryPartner: [
          {
            name: 'deliveroo',
            orderLink: 'https://deliveroo.co.uk/menu/london/victoria/the-sushi-co-victoria?day=today&geohash=gcpuuvfqz2bg&time=ASAP',
            logo: 'assets/images/delivery-partner/deliveroo.png',
            display: true
          },
          {
            name: 'justeat',
            orderLink: 'https://www.just-eat.co.uk/restaurants-the-sushi-co-london/',
            logo: 'assets/images/delivery-partner/just-eat.png',
            display: true
          },
          {
            name: 'ubereats',
            orderLink: 'https://www.ubereats.com/gb/store/the-sushi-co-victoria/BxgrfrRqQpah9IxGjqxoxg',
            logo: 'assets/images/delivery-partner/uber-eats.png',
            display: true
          },
        ],
        descreption: 'Vivamus vel mi lorem. Sed vitae felis nisl, at venenatis tortor. In at velit ac turpis aliquam volutpat. Ut et nibh augue. Integer imperdiet convallis massa nec gravida. Sed eleifend porta urna. Present non nisi tellus, ut lobortis massa. Sed pretium pretium pretium elit et vulputate.'

      },
      {
        id: 6, place: 'EALING', phone: '020 4516 5511', address: '23 New Broadway Ealing,London , W5 5AW',
        deliveroo: true, justeat: true, ubereats: true,
        geoLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.0034163912146!2d-0.30746454881407775!3d51.513153318003866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760df527df82a9%3A0x1d0eae2ed04e4a83!2sNew%20Broadway%2C%20London%20W5%205AW!5e0!3m2!1sen!2suk!4v1663427808026!5m2!1sen!2suk',
        timeTable: [
          { day: 'Monday', time: '11am - 11pm' },
          { day: 'Tuesday', time: '11am - 11pm' },
          { day: 'Wednesday', time: '11am - 11pm' },
          { day: 'Thursday', time: '11am - 11pm' },
          { day: 'Friday', time: '11am - 11pm' },
          { day: 'Saturday', time: '11am - 11pm' },
          { day: 'Sunday', time: '11am - 11pm' },],
        deliveryPartner: [
          {
            name: 'deliveroo',
            orderLink: 'https://deliveroo.co.uk/menu/london/ealing/the-sushi-co-new-broadway?day=today&geohash=gcpv0cnv946j&time=ASAP',
            logo: 'assets/images/delivery-partner/deliveroo.png',
            display: true
          },
          {
            name: 'justeat',
            orderLink: 'https://www.just-eat.co.uk/restaurants-the-sushi-co-chiswick/menu',
            logo: 'assets/images/delivery-partner/just-eat.png',
            display: true
          },
          {
            name: 'ubereats',
            orderLink: 'https://www.ubereats.com/gb/store/the-sushi-co-ealing/S_QvceKkWqCRpuZe2jLgbA?diningMode=DELIVERY',
            logo: 'assets/images/delivery-partner/uber-eats.png',
            display: true
          },
        ],
        descreption: 'Vivamus vel mi lorem. Sed vitae felis nisl, at venenatis tortor. In at velit ac turpis aliquam volutpat. Ut et nibh augue. Integer imperdiet convallis massa nec gravida. Sed eleifend porta urna. Present non nisi tellus, ut lobortis massa. Sed pretium pretium pretium elit et vulputate.'

      },
      {
        id: 7, place: 'WATERLOO', phone: '020 8076 1676', address: '89 lower Marsh Waterloo,London ,SE1 7AB',
        deliveroo: true, justeat: true, ubereats: true,
        geoLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.6183046068063!2d-0.1136632336480748!3d51.501871579634276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b97c3334a5%3A0xed9221584185ed76!2sLower%20Marsh%2C%20London%20SE1%207AB!5e0!3m2!1sen!2suk!4v1664575773207!5m2!1sen!2suk',
        timeTable: [
          { day: 'Monday', time: '11am - 11pm' },
          { day: 'Tuesday', time: '11am - 11pm' },
          { day: 'Wednesday', time: '11am - 11pm' },
          { day: 'Thursday', time: '11am - 11pm' },
          { day: 'Friday', time: '11am - 11pm' },
          { day: 'Saturday', time: '11am - 11pm' },
          { day: 'Sunday', time: '11am - 11pm' },],
        deliveryPartner: [
          {
            name: 'deliveroo',
            orderLink: 'https://deliveroo.co.uk/menu/london/waterloo-station/the-sushi-co-waterloo?day=today&geohash=gcpvj2jjrxbv&time=ASAP',
            logo: 'assets/images/delivery-partner/deliveroo.png',
            display: true
          },
          {
            name: 'justeat',
            orderLink: 'https://www.just-eat.co.uk/restaurants-the-sushi-co---waterloo-southwark/menu',
            logo: 'assets/images/delivery-partner/just-eat.png',
            display: true
          },
          {
            name: 'ubereats',
            orderLink: 'https://www.ubereats.com/gb/store/the-sushi-co-ealing/S_QvceKkWqCRpuZe2jLgbA?diningMode=DELIVERY',
            logo: 'assets/images/delivery-partner/uber-eats.png',
            display: true
          },
        ],
        descreption: 'Vivamus vel mi lorem. Sed vitae felis nisl, at venenatis tortor. In at velit ac turpis aliquam volutpat. Ut et nibh augue. Integer imperdiet convallis massa nec gravida. Sed eleifend porta urna. Present non nisi tellus, ut lobortis massa. Sed pretium pretium pretium elit et vulputate.'

      },
      {
        id: 8, place: 'PUTNEY', phone: '020 8076 1676', address: '82 High Street,Putney,SW15 1RB',
        deliveroo: true, justeat: false, ubereats: true,
        geoLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.7062317589944!2d-0.2181423842134295!3d51.46354987962794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760f0dc1e91e01%3A0x2935e0aad4c3d82c!2sPutney%20High%20St%2C%20London%20SW15%201RB!5e0!3m2!1sen!2suk!4v1665159621463!5m2!1sen!2suk',
        timeTable: [
          { day: 'Monday', time: '11am - 11pm' },
          { day: 'Tuesday', time: '11am - 11pm' },
          { day: 'Wednesday', time: '11am - 11pm' },
          { day: 'Thursday', time: '11am - 11pm' },
          { day: 'Friday', time: '11am - 11pm' },
          { day: 'Saturday', time: '11am - 11pm' },
          { day: 'Sunday', time: '11am - 11pm' },],
        deliveryPartner: [
          {
            name: 'deliveroo',
            orderLink: 'https://deliveroo.co.uk/menu/London/old-street/the-sushi-co-shoreditch',
            logo: 'assets/images/delivery-partner/deliveroo.png',
            display: true
          },
          {
            name: 'justeat',
            orderLink: '',
            logo: 'assets/images/delivery-partner/just-eat.png',
            display: false
          },
          {
            name: 'ubereats',
            orderLink: 'https://www.ubereats.com/store/the-sushi-co-putney/DLBlWRBgXYCsavJfnC2UKw?diningMode=DELIVERY',
            logo: 'assets/images/delivery-partner/uber-eats.png',
            display: true
          },
        ],
        descreption: 'Vivamus vel mi lorem. Sed vitae felis nisl, at venenatis tortor. In at velit ac turpis aliquam volutpat. Ut et nibh augue. Integer imperdiet convallis massa nec gravida. Sed eleifend porta urna. Present non nisi tellus, ut lobortis massa. Sed pretium pretium pretium elit et vulputate.'

      },
      {
        id: 9, place: 'SHOREDITCH', phone: ' 020 3089 9960', address: '121 City Road London,EC1V 1JB',
        deliveroo: true, justeat: false, ubereats: true,
        geoLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.282827411097!2d-0.08994693418231478!3d51.52637216713684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca5e41d5491%3A0x8ef36ed4c7dbb3aa!2sCity%20Rd%2C%20London%20EC1V%201JB!5e0!3m2!1sen!2suk!4v1672745149011!5m2!1sen!2suk',
        timeTable: [
          { day: 'Monday', time: '11am - 11pm' },
          { day: 'Tuesday', time: '11am - 11pm' },
          { day: 'Wednesday', time: '11am - 11pm' },
          { day: 'Thursday', time: '11am - 11pm' },
          { day: 'Friday', time: '11am - 11pm' },
          { day: 'Saturday', time: '11am - 11pm' },
          { day: 'Sunday', time: '11am - 11pm' },],
        deliveryPartner: [
          {
            name: 'deliveroo',
            orderLink: 'https://deliveroo.co.uk/menu/london/putney/the-sushi-co-putney',
            logo: 'assets/images/delivery-partner/deliveroo.png',
            display: true
          },
          {
            name: 'justeat',
            orderLink: '',
            logo: 'assets/images/delivery-partner/just-eat.png',
            display: false
          },
          {
            name: 'ubereats',
            orderLink: 'https://www.ubereats.com/home-landing?_branch_match_id=1144222604855759513&utm_medium=referrals&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL01KLUpNLCnWSywo0MvJzMvWD7FMLXMMK%2FfLKE8CAEGaIE8lAAAA',
            logo: 'assets/images/delivery-partner/uber-eats.png',
            display: true
          },
        ],
        descreption: 'Vivamus vel mi lorem. Sed vitae felis nisl, at venenatis tortor. In at velit ac turpis aliquam volutpat. Ut et nibh augue. Integer imperdiet convallis massa nec gravida. Sed eleifend porta urna. Present non nisi tellus, ut lobortis massa. Sed pretium pretium pretium elit et vulputate.'

      },
    ]
  }


}
