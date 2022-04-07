import { CatPhoto } from '../../type';

const catPhotoList: CatPhoto[] = [
  {
    id: 1,
    image: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg',
  },
  {
    id: 2,
    image: 'https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg',
  },
  {
    id: 3,
    image: 'https://cdn2.thecatapi.com/images/hBXicehMA.jpg',
  },
  {
    id: 4,
    image: 'https://cdn2.thecatapi.com/images/xnsqonbjW.jpg',
  },
  {
    id: 5,
    image: 'https://cdn2.thecatapi.com/images/JFPROfGtQ.jpg',
  },
  {
    id: 6,
    image: 'https://cdn2.thecatapi.com/images/8D--jCd21.jpg',
  },
  {
    id: 7,
    image: 'https://cdn2.thecatapi.com/images/k71ULYfRr.jpg',
  },
  {
    id: 8,
    image: 'https://cdn2.thecatapi.com/images/_6x-3TiCA.jpg',
  },
  {
    id: 9,
    image: 'https://cdn2.thecatapi.com/images/13MkvUreZ.jpg',
  },
  {
    id: 10,
    image: 'https://cdn2.thecatapi.com/images/5AdhMjeEu.jpg',
  },
  {
    id: 11,
    image: 'https://cdn2.thecatapi.com/images/O3btzLlsO.png',
  },
  {
    id: 12,
    image: 'https://cdn2.thecatapi.com/images/HOrX5gwLS.jpg',
  },
  {
    id: 13,
    image: 'https://cdn2.thecatapi.com/images/5iYq9NmT1.jpg',
  },
  {
    id: 14,
    image: 'https://cdn2.thecatapi.com/images/7isAO4Cav.jpg',
  },
  {
    id: 15,
    image: 'https://cdn2.thecatapi.com/images/s4wQfYoEk.jpg',
  },
  {
    id: 16,
    image: 'https://cdn2.thecatapi.com/images/4lXnnfxac.jpg',
  },
  {
    id: 17,
    image: 'https://cdn2.thecatapi.com/images/jvg3XfEdC.jpg',
  },
  {
    id: 18,
    image: 'https://cdn2.thecatapi.com/images/B1ERTmgph.jpg',
  },
  {
    id: 19,
    image: 'https://cdn2.thecatapi.com/images/s4wQfYoEk.jpg',
  },
  {
    id: 20,
    image: 'https://cdn2.thecatapi.com/images/TR-5nAd_S.jpg',
  },
  {
    id: 21,
    image: 'https://cdn2.thecatapi.com/images/j6oFGLpRG.jpg',
  },
  {
    id: 22,
    image: 'https://cdn2.thecatapi.com/images/vJ3lEYgXr.jpg',
  },
  {
    id: 23,
    image: 'https://cdn2.thecatapi.com/images/IFXsxmXLm.jpg',
  },
  {
    id: 24,
    image: 'https://cdn2.thecatapi.com/images/oSpqGyUDS.jpg',
  },
  {
    id: 25,
    image: 'https://cdn2.thecatapi.com/images/unX21IBVB.jpg',
  },
  {
    id: 26,
    image: 'https://cdn2.thecatapi.com/images/3dbtapCWM.jpg',
  },
  {
    id: 27,
    image: 'https://cdn2.thecatapi.com/images/tJbzb7FKo.jpg',
  },
  {
    id: 28,
    image: 'https://cdn2.thecatapi.com/images/4RzEwvyzz.png',
  },
  {
    id: 29,
    image: 'https://cdn2.thecatapi.com/images/3KG57GfMW.jpg',
  },
  {
    id: 30,
    image: 'https://cdn2.thecatapi.com/images/BQMSld0A0.jpg',
  },
  {
    id: 31,
    image: 'https://cdn2.thecatapi.com/images/TuSyTkt2n.jpg',
  },
  {
    id: 32,
    image: 'https://cdn2.thecatapi.com/images/njK25knLH.jpg',
  },
  {
    id: 33,
    image: 'https://cdn2.thecatapi.com/images/CDhOtM-Ig.jpg',
  },
  {
    id: 34,
    image: 'https://cdn2.thecatapi.com/images/-tm9-znzl.jpg',
  },
  {
    id: 35,
    image: 'https://cdn2.thecatapi.com/images/xoI_EpOKe.jpg',
  },
  {
    id: 36,
    image: 'https://cdn2.thecatapi.com/images/165ok6ESN.jpg',
  },
  {
    id: 37,
    image: 'https://cdn2.thecatapi.com/images/DbwiefiaY.png',
  },
];

export const getCatPhotoList = () => {
  return new Promise<CatPhoto[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(catPhotoList);
    }, 500);
  });
};
