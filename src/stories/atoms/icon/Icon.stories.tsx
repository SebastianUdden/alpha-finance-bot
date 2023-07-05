import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import styled from "styled-components";
import { getPages } from "../../utils";
import { featherSvgs } from "./featherSvgs";
import Icon from "./Icon";

export default {
  title: "Atoms/Icon",
  component: Icon,
  argTypes: {
    size: { control: "number" },
  },
} as ComponentMeta<any>;

const Background = styled.div<{ color?: string; bgColor?: string }>`
  color: ${(p) => p.color || p.theme.colors.white};
  background-color: ${(p) => p.bgColor || p.theme.colors.elevatedBackground};
  border-radius: 12px;
  padding: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;
const IconWrapper = styled.span<{ color?: string; bgColor?: string }>`
  display: inline-block;
  margin: 10px;
`;

const Icons = ({ page }: { page: number }) => {
  const [color, setColor] = useState<string>("");
  const [bgColor, setBgColor] = useState<string>("");
  const pages = getPages(287, Object.keys(featherSvgs));
  return (
    <>
      <label>Select icon color</label>{" "}
      <input type="color" onChange={(e: any) => setColor(e.target.value)} />
      <hr />
      <label>Select background color</label>{" "}
      <input type="color" onChange={(e: any) => setBgColor(e.target.value)} />
      <hr />
      <Background bgColor={bgColor} color={color}>
        {pages &&
          pages.length !== 0 &&
          pages[page].map((key: any) => (
            <IconWrapper key={key}>
              <Icon type={key} />
            </IconWrapper>
          ))}
      </Background>
    </>
  );
};
export const Icons1: ComponentStory<any> = () => <Icons page={0} />;
export const Icons2: ComponentStory<any> = () => <Icons page={1} />;
export const Icons3: ComponentStory<any> = () => <Icons page={2} />;

export const activity: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="activity" type="activity" />
  </IconWrapper>
);
export const airplay: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="airplay" type="airplay" />
  </IconWrapper>
);
export const alertCircle: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="alertCircle" type="alertCircle" />
  </IconWrapper>
);
export const alertOctagon: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="alertOctagon" type="alertOctagon" />
  </IconWrapper>
);
export const alertTriangle: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="alertTriangle" type="alertTriangle" />
  </IconWrapper>
);
export const alignCenter: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="alignCenter" type="alignCenter" />
  </IconWrapper>
);
export const alignJustify: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="alignJustify" type="alignJustify" />
  </IconWrapper>
);
export const alignLeft: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="alignLeft" type="alignLeft" />
  </IconWrapper>
);
export const alignRight: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="alignRight" type="alignRight" />
  </IconWrapper>
);
export const anchor: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="anchor" type="anchor" />
  </IconWrapper>
);
export const aperture: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="aperture" type="aperture" />
  </IconWrapper>
);
export const archive: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="archive" type="archive" />
  </IconWrapper>
);
export const arrowDownCircle: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="arrowDownCircle" type="arrowDownCircle" />
  </IconWrapper>
);
export const arrowDownLeft: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="arrowDownLeft" type="arrowDownLeft" />
  </IconWrapper>
);
export const arrowDownRight: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="arrowDownRight" type="arrowDownRight" />
  </IconWrapper>
);
export const arrowDown: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="arrowDown" type="arrowDown" />
  </IconWrapper>
);
export const arrowLeftCircle: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="arrowLeftCircle" type="arrowLeftCircle" />
  </IconWrapper>
);
export const arrowLeft: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="arrowLeft" type="arrowLeft" />
  </IconWrapper>
);
export const arrowRightCircle: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="arrowRightCircle" type="arrowRightCircle" />
  </IconWrapper>
);
export const arrowRight: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="arrowRight" type="arrowRight" />
  </IconWrapper>
);
export const arrowUpCircle: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="arrowUpCircle" type="arrowUpCircle" />
  </IconWrapper>
);
export const arrowUpLeft: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="arrowUpLeft" type="arrowUpLeft" />
  </IconWrapper>
);
export const arrowUpRight: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="arrowUpRight" type="arrowUpRight" />
  </IconWrapper>
);
export const arrowUp: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="arrowUp" type="arrowUp" />
  </IconWrapper>
);
export const atSign: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="atSign" type="atSign" />
  </IconWrapper>
);
export const award: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="award" type="award" />
  </IconWrapper>
);
export const barChart2: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="barChart2" type="barChart2" />
  </IconWrapper>
);
export const barChart: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="barChart" type="barChart" />
  </IconWrapper>
);
export const batteryCharging: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="batteryCharging" type="batteryCharging" />
  </IconWrapper>
);
export const battery: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="battery" type="battery" />
  </IconWrapper>
);
export const bellOff: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="bellOff" type="bellOff" />
  </IconWrapper>
);
export const bell: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="bell" type="bell" />
  </IconWrapper>
);
export const bluetooth: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="bluetooth" type="bluetooth" />
  </IconWrapper>
);
export const bold: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="bold" type="bold" />
  </IconWrapper>
);
export const bookOpen: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="bookOpen" type="bookOpen" />
  </IconWrapper>
);
export const book: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="book" type="book" />
  </IconWrapper>
);
export const bookmark: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="bookmark" type="bookmark" />
  </IconWrapper>
);
export const box: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="box" type="box" />
  </IconWrapper>
);
export const briefcase: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="briefcase" type="briefcase" />
  </IconWrapper>
);
export const calendar: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="calendar" type="calendar" />
  </IconWrapper>
);
export const cameraOff: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="cameraOff" type="cameraOff" />
  </IconWrapper>
);
export const camera: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="camera" type="camera" />
  </IconWrapper>
);
export const cast: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="cast" type="cast" />
  </IconWrapper>
);
export const checkCircle: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="checkCircle" type="checkCircle" />
  </IconWrapper>
);
export const checkSquare: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="checkSquare" type="checkSquare" />
  </IconWrapper>
);
export const check: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="check" type="check" />
  </IconWrapper>
);
export const chevronDown: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="chevronDown" type="chevronDown" />
  </IconWrapper>
);
export const chevronLeft: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="chevronLeft" type="chevronLeft" />
  </IconWrapper>
);
export const chevronRight: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="chevronRight" type="chevronRight" />
  </IconWrapper>
);
export const chevronUp: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="chevronUp" type="chevronUp" />
  </IconWrapper>
);
export const chevronsDown: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="chevronsDown" type="chevronsDown" />
  </IconWrapper>
);
export const chevronsLeft: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="chevronsLeft" type="chevronsLeft" />
  </IconWrapper>
);
export const chevronsRight: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="chevronsRight" type="chevronsRight" />
  </IconWrapper>
);
export const chevronsUp: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="chevronsUp" type="chevronsUp" />
  </IconWrapper>
);
export const chrome: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="chrome" type="chrome" />
  </IconWrapper>
);
export const circle: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="circle" type="circle" />
  </IconWrapper>
);
export const clipboard: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="clipboard" type="clipboard" />
  </IconWrapper>
);
export const clock: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="clock" type="clock" />
  </IconWrapper>
);
export const cloudDrizzle: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="cloudDrizzle" type="cloudDrizzle" />
  </IconWrapper>
);
export const cloudLightning: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="cloudLightning" type="cloudLightning" />
  </IconWrapper>
);
export const cloudOff: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="cloudOff" type="cloudOff" />
  </IconWrapper>
);
export const cloudRain: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="cloudRain" type="cloudRain" />
  </IconWrapper>
);
export const cloudSnow: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="cloudSnow" type="cloudSnow" />
  </IconWrapper>
);
export const cloud: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="cloud" type="cloud" />
  </IconWrapper>
);
export const code: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="code" type="code" />
  </IconWrapper>
);
export const codepen: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="codepen" type="codepen" />
  </IconWrapper>
);
export const codesandbox: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="codesandbox" type="codesandbox" />
  </IconWrapper>
);
export const coffee: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="coffee" type="coffee" />
  </IconWrapper>
);
export const columns: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="columns" type="columns" />
  </IconWrapper>
);
export const command: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="command" type="command" />
  </IconWrapper>
);
export const compass: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="compass" type="compass" />
  </IconWrapper>
);
export const copy: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="copy" type="copy" />
  </IconWrapper>
);
export const cornerDownLeft: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="cornerDownLeft" type="cornerDownLeft" />
  </IconWrapper>
);
export const cornerDownRight: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="cornerDownRight" type="cornerDownRight" />
  </IconWrapper>
);
export const cornerLeftDown: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="cornerLeftDown" type="cornerLeftDown" />
  </IconWrapper>
);
export const cornerLeftUp: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="cornerLeftUp" type="cornerLeftUp" />
  </IconWrapper>
);
export const cornerRightDown: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="cornerRightDown" type="cornerRightDown" />
  </IconWrapper>
);
export const cornerRightUp: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="cornerRightUp" type="cornerRightUp" />
  </IconWrapper>
);
export const cornerUpLeft: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="cornerUpLeft" type="cornerUpLeft" />
  </IconWrapper>
);
export const cornerUpRight: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="cornerUpRight" type="cornerUpRight" />
  </IconWrapper>
);
export const cpu: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="cpu" type="cpu" />
  </IconWrapper>
);
export const creditCard: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="creditCard" type="creditCard" />
  </IconWrapper>
);
export const crop: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="crop" type="crop" />
  </IconWrapper>
);
export const crosshair: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="crosshair" type="crosshair" />
  </IconWrapper>
);
export const database: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="database" type="database" />
  </IconWrapper>
);
export const deleteIcon: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="deleteIcon" type="deleteIcon" />
  </IconWrapper>
);
export const disc: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="disc" type="disc" />
  </IconWrapper>
);
export const divideCircle: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="divideCircle" type="divideCircle" />
  </IconWrapper>
);
export const divideSquare: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="divideSquare" type="divideSquare" />
  </IconWrapper>
);
export const divide: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="divide" type="divide" />
  </IconWrapper>
);
export const dollarSign: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="dollarSign" type="dollarSign" />
  </IconWrapper>
);
export const downloadCloud: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="downloadCloud" type="downloadCloud" />
  </IconWrapper>
);
export const download: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="download" type="download" />
  </IconWrapper>
);
export const dribbble: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="dribbble" type="dribbble" />
  </IconWrapper>
);
export const droplet: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="droplet" type="droplet" />
  </IconWrapper>
);
export const ecomMenu: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="ecomMenu" type="ecomMenu" />
  </IconWrapper>
);
export const edit2: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="edit2" type="edit2" />
  </IconWrapper>
);
export const edit3: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="edit3" type="edit3" />
  </IconWrapper>
);
export const edit: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="edit" type="edit" />
  </IconWrapper>
);
export const externalLink: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="externalLink" type="externalLink" />
  </IconWrapper>
);
export const eyeOff: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="eyeOff" type="eyeOff" />
  </IconWrapper>
);
export const eye: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="eye" type="eye" />
  </IconWrapper>
);
export const facebook: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="facebook" type="facebook" />
  </IconWrapper>
);
export const fastForward: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="fastForward" type="fastForward" />
  </IconWrapper>
);
export const feather: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="feather" type="feather" />
  </IconWrapper>
);
export const figma: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="figma" type="figma" />
  </IconWrapper>
);
export const fileMinus: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="fileMinus" type="fileMinus" />
  </IconWrapper>
);
export const filePlus: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="filePlus" type="filePlus" />
  </IconWrapper>
);
export const fileText: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="fileText" type="fileText" />
  </IconWrapper>
);
export const file: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="file" type="file" />
  </IconWrapper>
);
export const film: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="film" type="film" />
  </IconWrapper>
);
export const filter: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="filter" type="filter" />
  </IconWrapper>
);
export const flag: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="flag" type="flag" />
  </IconWrapper>
);
export const folderMinus: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="folderMinus" type="folderMinus" />
  </IconWrapper>
);
export const folderPlus: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="folderPlus" type="folderPlus" />
  </IconWrapper>
);
export const folder: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="folder" type="folder" />
  </IconWrapper>
);
export const framer: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="framer" type="framer" />
  </IconWrapper>
);
export const frown: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="frown" type="frown" />
  </IconWrapper>
);
export const gift: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="gift" type="gift" />
  </IconWrapper>
);
export const gitBranch: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="gitBranch" type="gitBranch" />
  </IconWrapper>
);
export const gitCommit: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="gitCommit" type="gitCommit" />
  </IconWrapper>
);
export const gitMerge: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="gitMerge" type="gitMerge" />
  </IconWrapper>
);
export const gitPullRequest: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="gitPullRequest" type="gitPullRequest" />
  </IconWrapper>
);
export const github: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="github" type="github" />
  </IconWrapper>
);
export const gitlab: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="gitlab" type="gitlab" />
  </IconWrapper>
);
export const globe: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="globe" type="globe" />
  </IconWrapper>
);
export const grid: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="grid" type="grid" />
  </IconWrapper>
);
export const hardDrive: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="hardDrive" type="hardDrive" />
  </IconWrapper>
);
export const hash: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="hash" type="hash" />
  </IconWrapper>
);
export const headphones: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="headphones" type="headphones" />
  </IconWrapper>
);
export const heart: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="heart" type="heart" />
  </IconWrapper>
);
export const helpCircle: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="helpCircle" type="helpCircle" />
  </IconWrapper>
);
export const hexagon: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="hexagon" type="hexagon" />
  </IconWrapper>
);
export const home: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="home" type="home" />
  </IconWrapper>
);
export const image: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="image" type="image" />
  </IconWrapper>
);
export const inbox: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="inbox" type="inbox" />
  </IconWrapper>
);
export const info: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="info" type="info" />
  </IconWrapper>
);
export const instagram: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="instagram" type="instagram" />
  </IconWrapper>
);
export const italic: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="italic" type="italic" />
  </IconWrapper>
);
export const key: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="key" type="key" />
  </IconWrapper>
);
export const layers: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="layers" type="layers" />
  </IconWrapper>
);
export const layout: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="layout" type="layout" />
  </IconWrapper>
);
export const lifeBuoy: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="lifeBuoy" type="lifeBuoy" />
  </IconWrapper>
);
export const link2: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="link2" type="link2" />
  </IconWrapper>
);
export const link: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="link" type="link" />
  </IconWrapper>
);
export const linkedin: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="linkedin" type="linkedin" />
  </IconWrapper>
);
export const list: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="list" type="list" />
  </IconWrapper>
);
export const loader: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="loader" type="loader" />
  </IconWrapper>
);
export const lock: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="lock" type="lock" />
  </IconWrapper>
);
export const logIn: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="logIn" type="logIn" />
  </IconWrapper>
);
export const logOut: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="logOut" type="logOut" />
  </IconWrapper>
);
export const mail: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="mail" type="mail" />
  </IconWrapper>
);
export const mapPin: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="mapPin" type="mapPin" />
  </IconWrapper>
);
export const map: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="map" type="map" />
  </IconWrapper>
);
export const maximize2: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="maximize2" type="maximize2" />
  </IconWrapper>
);
export const maximize: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="maximize" type="maximize" />
  </IconWrapper>
);
export const meh: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="meh" type="meh" />
  </IconWrapper>
);
export const menu: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="menu" type="menu" />
  </IconWrapper>
);
export const messageCircle: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="messageCircle" type="messageCircle" />
  </IconWrapper>
);
export const messageSquare: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="messageSquare" type="messageSquare" />
  </IconWrapper>
);
export const micOff: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="micOff" type="micOff" />
  </IconWrapper>
);
export const mic: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="mic" type="mic" />
  </IconWrapper>
);
export const minimize2: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="minimize2" type="minimize2" />
  </IconWrapper>
);
export const minimize: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="minimize" type="minimize" />
  </IconWrapper>
);
export const minusCircle: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="minusCircle" type="minusCircle" />
  </IconWrapper>
);
export const minusSquare: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="minusSquare" type="minusSquare" />
  </IconWrapper>
);
export const minus: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="minus" type="minus" />
  </IconWrapper>
);
export const monitor: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="monitor" type="monitor" />
  </IconWrapper>
);
export const moon: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="moon" type="moon" />
  </IconWrapper>
);
export const moreHorizontal: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="moreHorizontal" type="moreHorizontal" />
  </IconWrapper>
);
export const moreVertical: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="moreVertical" type="moreVertical" />
  </IconWrapper>
);
export const mousePointer: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="mousePointer" type="mousePointer" />
  </IconWrapper>
);
export const move: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="move" type="move" />
  </IconWrapper>
);
export const music: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="music" type="music" />
  </IconWrapper>
);
export const navigation2: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="navigation2" type="navigation2" />
  </IconWrapper>
);
export const navigation: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="navigation" type="navigation" />
  </IconWrapper>
);
export const octagon: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="octagon" type="octagon" />
  </IconWrapper>
);
export const packageIcon: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="packageIcon" type="packageIcon" />
  </IconWrapper>
);
export const paperclip: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="paperclip" type="paperclip" />
  </IconWrapper>
);
export const pauseCircle: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="pauseCircle" type="pauseCircle" />
  </IconWrapper>
);
export const pause: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="pause" type="pause" />
  </IconWrapper>
);
export const penTool: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="penTool" type="penTool" />
  </IconWrapper>
);
export const percent: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="percent" type="percent" />
  </IconWrapper>
);
export const phoneCall: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="phoneCall" type="phoneCall" />
  </IconWrapper>
);
export const phoneForwarded: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="phoneForwarded" type="phoneForwarded" />
  </IconWrapper>
);
export const phoneIncoming: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="phoneIncoming" type="phoneIncoming" />
  </IconWrapper>
);
export const phoneMissed: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="phoneMissed" type="phoneMissed" />
  </IconWrapper>
);
export const phoneOff: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="phoneOff" type="phoneOff" />
  </IconWrapper>
);
export const phoneOutgoing: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="phoneOutgoing" type="phoneOutgoing" />
  </IconWrapper>
);
export const phone: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="phone" type="phone" />
  </IconWrapper>
);
export const pieChart: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="pieChart" type="pieChart" />
  </IconWrapper>
);
export const playCircle: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="playCircle" type="playCircle" />
  </IconWrapper>
);
export const play: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="play" type="play" />
  </IconWrapper>
);
export const plusCircle: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="plusCircle" type="plusCircle" />
  </IconWrapper>
);
export const plusSquare: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="plusSquare" type="plusSquare" />
  </IconWrapper>
);
export const plus: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="plus" type="plus" />
  </IconWrapper>
);
export const pocket: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="pocket" type="pocket" />
  </IconWrapper>
);
export const power: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="power" type="power" />
  </IconWrapper>
);
export const printer: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="printer" type="printer" />
  </IconWrapper>
);
export const radio: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="radio" type="radio" />
  </IconWrapper>
);
export const refreshCcw: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="refreshCcw" type="refreshCcw" />
  </IconWrapper>
);
export const refreshCw: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="refreshCw" type="refreshCw" />
  </IconWrapper>
);
export const repeat: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="repeat" type="repeat" />
  </IconWrapper>
);
export const rewind: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="rewind" type="rewind" />
  </IconWrapper>
);
export const rotateCcw: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="rotateCcw" type="rotateCcw" />
  </IconWrapper>
);
export const rotateCw: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="rotateCw" type="rotateCw" />
  </IconWrapper>
);
export const rss: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="rss" type="rss" />
  </IconWrapper>
);
export const save: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="save" type="save" />
  </IconWrapper>
);
export const scissors: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="scissors" type="scissors" />
  </IconWrapper>
);
export const search: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="search" type="search" />
  </IconWrapper>
);
export const send: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="send" type="send" />
  </IconWrapper>
);
export const server: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="server" type="server" />
  </IconWrapper>
);
export const settings: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="settings" type="settings" />
  </IconWrapper>
);
export const share2: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="share2" type="share2" />
  </IconWrapper>
);
export const share: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="share" type="share" />
  </IconWrapper>
);
export const shieldOff: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="shieldOff" type="shieldOff" />
  </IconWrapper>
);
export const shield: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="shield" type="shield" />
  </IconWrapper>
);
export const shoppingBag: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="shoppingBag" type="shoppingBag" />
  </IconWrapper>
);
export const shoppingCart: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="shoppingCart" type="shoppingCart" />
  </IconWrapper>
);
export const shuffle: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="shuffle" type="shuffle" />
  </IconWrapper>
);
export const sidebar: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="sidebar" type="sidebar" />
  </IconWrapper>
);
export const skipBack: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="skipBack" type="skipBack" />
  </IconWrapper>
);
export const skipForward: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="skipForward" type="skipForward" />
  </IconWrapper>
);
export const slack: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="slack" type="slack" />
  </IconWrapper>
);
export const slash: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="slash" type="slash" />
  </IconWrapper>
);
export const sliders: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="sliders" type="sliders" />
  </IconWrapper>
);
export const smartphone: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="smartphone" type="smartphone" />
  </IconWrapper>
);
export const smile: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="smile" type="smile" />
  </IconWrapper>
);
export const speaker: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="speaker" type="speaker" />
  </IconWrapper>
);
export const square: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="square" type="square" />
  </IconWrapper>
);
export const star: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="star" type="star" />
  </IconWrapper>
);
export const stopCircle: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="stopCircle" type="stopCircle" />
  </IconWrapper>
);
export const sun: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="sun" type="sun" />
  </IconWrapper>
);
export const sunrise: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="sunrise" type="sunrise" />
  </IconWrapper>
);
export const sunset: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="sunset" type="sunset" />
  </IconWrapper>
);
export const table: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="table" type="table" />
  </IconWrapper>
);
export const tablet: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="tablet" type="tablet" />
  </IconWrapper>
);
export const tag: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="tag" type="tag" />
  </IconWrapper>
);
export const target: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="target" type="target" />
  </IconWrapper>
);
export const terminal: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="terminal" type="terminal" />
  </IconWrapper>
);
export const thermometer: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="thermometer" type="thermometer" />
  </IconWrapper>
);
export const thumbsDown: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="thumbsDown" type="thumbsDown" />
  </IconWrapper>
);
export const thumbsUp: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="thumbsUp" type="thumbsUp" />
  </IconWrapper>
);
export const toggleLeft: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="toggleLeft" type="toggleLeft" />
  </IconWrapper>
);
export const toggleRight: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="toggleRight" type="toggleRight" />
  </IconWrapper>
);
export const tool: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="tool" type="tool" />
  </IconWrapper>
);
export const trash2: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="trash2" type="trash2" />
  </IconWrapper>
);
export const trash: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="trash" type="trash" />
  </IconWrapper>
);
export const trello: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="trello" type="trello" />
  </IconWrapper>
);
export const trendingDown: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="trendingDown" type="trendingDown" />
  </IconWrapper>
);
export const trendingUp: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="trendingUp" type="trendingUp" />
  </IconWrapper>
);
export const triangle: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="triangle" type="triangle" />
  </IconWrapper>
);
export const truck: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="truck" type="truck" />
  </IconWrapper>
);
export const tv: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="tv" type="tv" />
  </IconWrapper>
);
export const twitch: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="twitch" type="twitch" />
  </IconWrapper>
);
export const twitter: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="twitter" type="twitter" />
  </IconWrapper>
);
export const typeIcon: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="typeIcon" type="typeIcon" />
  </IconWrapper>
);
export const umbrella: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="umbrella" type="umbrella" />
  </IconWrapper>
);
export const underline: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="underline" type="underline" />
  </IconWrapper>
);
export const unlock: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="unlock" type="unlock" />
  </IconWrapper>
);
export const uploadCloud: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="uploadCloud" type="uploadCloud" />
  </IconWrapper>
);
export const upload: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="upload" type="upload" />
  </IconWrapper>
);
export const userCheck: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="userCheck" type="userCheck" />
  </IconWrapper>
);
export const userMinus: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="userMinus" type="userMinus" />
  </IconWrapper>
);
export const userPlus: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="userPlus" type="userPlus" />
  </IconWrapper>
);
export const userX: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="userX" type="userX" />
  </IconWrapper>
);
export const user: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="user" type="user" />
  </IconWrapper>
);
export const users: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="users" type="users" />
  </IconWrapper>
);
export const videoOff: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="videoOff" type="videoOff" />
  </IconWrapper>
);
export const video: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="video" type="video" />
  </IconWrapper>
);
export const voicemail: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="voicemail" type="voicemail" />
  </IconWrapper>
);
export const volume1: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="volume1" type="volume1" />
  </IconWrapper>
);
export const volume2: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="volume2" type="volume2" />
  </IconWrapper>
);
export const volumeX: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="volumeX" type="volumeX" />
  </IconWrapper>
);
export const volume: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="volume" type="volume" />
  </IconWrapper>
);
export const watch: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="watch" type="watch" />
  </IconWrapper>
);
export const wifiOff: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="wifiOff" type="wifiOff" />
  </IconWrapper>
);
export const wifi: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="wifi" type="wifi" />
  </IconWrapper>
);
export const wind: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="wind" type="wind" />
  </IconWrapper>
);
export const xCircle: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="xCircle" type="xCircle" />
  </IconWrapper>
);
export const xOctagon: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="xOctagon" type="xOctagon" />
  </IconWrapper>
);
export const xSquare: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="xSquare" type="xSquare" />
  </IconWrapper>
);
export const x: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="x" type="x" />
  </IconWrapper>
);
export const youtube: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="youtube" type="youtube" />
  </IconWrapper>
);
export const zapOff: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="zapOff" type="zapOff" />
  </IconWrapper>
);
export const zap: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="zap" type="zap" />
  </IconWrapper>
);
export const zoomIn: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="zoomIn" type="zoomIn" />
  </IconWrapper>
);
export const zoomOut: ComponentStory<any> = () => (
  <IconWrapper>
    <Icon key="zoomOut" type="zoomOut" />
  </IconWrapper>
);
