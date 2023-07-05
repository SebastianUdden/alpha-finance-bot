import fs from "fs";

const allFiles = [
  "./alert-circle.svg",
  "./alert-octagon.svg",
  "./alert-triangle.svg",
  "./align-center.svg",
  "./align-justify.svg",
  "./align-left.svg",
  "./align-right.svg",
  "./anchor.svg",
  "./aperture.svg",
  "./archive.svg",
  "./arrow-down-circle.svg",
  "./arrow-down-left.svg",
  "./arrow-down-right.svg",
  "./arrow-down.svg",
  "./arrow-left-circle.svg",
  "./arrow-left.svg",
  "./arrow-right-circle.svg",
  "./arrow-right.svg",
  "./arrow-up-circle.svg",
  "./arrow-up-left.svg",
  "./arrow-up-right.svg",
  "./arrow-up.svg",
  "./at-sign.svg",
  "./award.svg",
  "./bar-chart-2.svg",
  "./bar-chart.svg",
  "./battery-charging.svg",
  "./battery.svg",
  "./bell-off.svg",
  "./bell.svg",
  "./bluetooth.svg",
  "./bold.svg",
  "./book-open.svg",
  "./book.svg",
  "./bookmark.svg",
  "./box.svg",
  "./briefcase.svg",
  "./calendar.svg",
  "./camera-off.svg",
  "./camera.svg",
  "./cast.svg",
  "./check-circle.svg",
  "./check-square.svg",
  "./check.svg",
  "./chevron-down.svg",
  "./chevron-left.svg",
  "./chevron-right.svg",
  "./chevron-up.svg",
  "./chevrons-down.svg",
  "./chevrons-left.svg",
  "./chevrons-right.svg",
  "./chevrons-up.svg",
  "./chrome.svg",
  "./circle.svg",
  "./clipboard.svg",
  "./clock.svg",
  "./cloud-drizzle.svg",
  "./cloud-lightning.svg",
  "./cloud-off.svg",
  "./cloud-rain.svg",
  "./cloud-snow.svg",
  "./cloud.svg",
  "./code.svg",
  "./codepen.svg",
  "./codesandbox.svg",
  "./coffee.svg",
  "./columns.svg",
  "./command.svg",
  "./compass.svg",
  "./copy.svg",
  "./corner-down-left.svg",
  "./corner-down-right.svg",
  "./corner-left-down.svg",
  "./corner-left-up.svg",
  "./corner-right-down.svg",
  "./corner-right-up.svg",
  "./corner-up-left.svg",
  "./corner-up-right.svg",
  "./cpu.svg",
  "./credit-card.svg",
  "./crop.svg",
  "./crosshair.svg",
  "./database.svg",
  "./delete.svg",
  "./disc.svg",
  "./divide-circle.svg",
  "./divide-square.svg",
  "./divide.svg",
  "./dollar-sign.svg",
  "./download-cloud.svg",
  "./download.svg",
  "./dribbble.svg",
  "./droplet.svg",
  "./ecom-menu.svg",
  "./edit-2.svg",
  "./edit-3.svg",
  "./edit.svg",
  "./external-link.svg",
  "./eye-off.svg",
  "./eye.svg",
  "./facebook.svg",
  "./fast-forward.svg",
  "./feather.svg",
  "./figma.svg",
  "./file-minus.svg",
  "./file-plus.svg",
  "./file-text.svg",
  "./file.svg",
  "./film.svg",
  "./filter.svg",
  "./flag.svg",
  "./folder-minus.svg",
  "./folder-plus.svg",
  "./folder.svg",
  "./framer.svg",
  "./frown.svg",
  "./gift.svg",
  "./git-branch.svg",
  "./git-commit.svg",
  "./git-merge.svg",
  "./git-pull-request.svg",
  "./github.svg",
  "./gitlab.svg",
  "./globe.svg",
  "./grid.svg",
  "./hard-drive.svg",
  "./hash.svg",
  "./headphones.svg",
  "./heart.svg",
  "./help-circle.svg",
  "./hexagon.svg",
  "./home.svg",
  "./image.svg",
  "./inbox.svg",
  "./info.svg",
  "./instagram.svg",
  "./italic.svg",
  "./key.svg",
  "./layers.svg",
  "./layout.svg",
  "./life-buoy.svg",
  "./link-2.svg",
  "./link.svg",
  "./linkedin.svg",
  "./list.svg",
  "./loader.svg",
  "./lock.svg",
  "./log-in.svg",
  "./log-out.svg",
  "./mail.svg",
  "./map-pin.svg",
  "./map.svg",
  "./maximize-2.svg",
  "./maximize.svg",
  "./meh.svg",
  "./menu.svg",
  "./message-circle.svg",
  "./message-square.svg",
  "./mic-off.svg",
  "./mic.svg",
  "./minimize-2.svg",
  "./minimize.svg",
  "./minus-circle.svg",
  "./minus-square.svg",
  "./minus.svg",
  "./monitor.svg",
  "./moon.svg",
  "./more-horizontal.svg",
  "./more-vertical.svg",
  "./mouse-pointer.svg",
  "./move.svg",
  "./music.svg",
  "./navigation-2.svg",
  "./navigation.svg",
  "./octagon.svg",
  "./package.svg",
  "./paperclip.svg",
  "./pause-circle.svg",
  "./pause.svg",
  "./pen-tool.svg",
  "./percent.svg",
  "./phone-call.svg",
  "./phone-forwarded.svg",
  "./phone-incoming.svg",
  "./phone-missed.svg",
  "./phone-off.svg",
  "./phone-outgoing.svg",
  "./phone.svg",
  "./pie-chart.svg",
  "./play-circle.svg",
  "./play.svg",
  "./plus-circle.svg",
  "./plus-square.svg",
  "./plus.svg",
  "./pocket.svg",
  "./power.svg",
  "./printer.svg",
  "./radio.svg",
  "./refresh-ccw.svg",
  "./refresh-cw.svg",
  "./repeat.svg",
  "./rewind.svg",
  "./rotate-ccw.svg",
  "./rotate-cw.svg",
  "./rss.svg",
  "./save.svg",
  "./scissors.svg",
  "./search.svg",
  "./send.svg",
  "./server.svg",
  "./settings.svg",
  "./share-2.svg",
  "./share.svg",
  "./shield-off.svg",
  "./shield.svg",
  "./shopping-bag.svg",
  "./shopping-cart.svg",
  "./shuffle.svg",
  "./sidebar.svg",
  "./skip-back.svg",
  "./skip-forward.svg",
  "./slack.svg",
  "./slash.svg",
  "./sliders.svg",
  "./smartphone.svg",
  "./smile.svg",
  "./speaker.svg",
  "./square.svg",
  "./star.svg",
  "./stop-circle.svg",
  "./sun.svg",
  "./sunrise.svg",
  "./sunset.svg",
  "./table.svg",
  "./tablet.svg",
  "./tag.svg",
  "./target.svg",
  "./terminal.svg",
  "./thermometer.svg",
  "./thumbs-down.svg",
  "./thumbs-up.svg",
  "./toggle-left.svg",
  "./toggle-right.svg",
  "./tool.svg",
  "./trash-2.svg",
  "./trash.svg",
  "./trello.svg",
  "./trending-down.svg",
  "./trending-up.svg",
  "./triangle.svg",
  "./truck.svg",
  "./tv.svg",
  "./twitch.svg",
  "./twitter.svg",
  "./type.svg",
  "./umbrella.svg",
  "./underline.svg",
  "./unlock.svg",
  "./upload-cloud.svg",
  "./upload.svg",
  "./user-check.svg",
  "./user-minus.svg",
  "./user-plus.svg",
  "./user-x.svg",
  "./user.svg",
  "./users.svg",
  "./video-off.svg",
  "./video.svg",
  "./voicemail.svg",
  "./volume-1.svg",
  "./volume-2.svg",
  "./volume-x.svg",
  "./volume.svg",
  "./watch.svg",
  "./wifi-off.svg",
  "./wifi.svg",
  "./wind.svg",
  "./x-circle.svg",
  "./x-octagon.svg",
  "./x-square.svg",
  "./x.svg",
  "./youtube.svg",
  "./zap-off.svg",
  "./zap.svg",
  "./zoom-in.svg",
  "./zoom-out.svg",
];

allFiles.forEach((file) => {
  var content = fs.readFileSync(file, "utf8");
  fs.unlinkSync(file);
  const varName = file.split("/")[1].split(".")[0];
  const newContent = `const ${varName} = (
    ${content
      .replace(`class="feather feather-${varName}"`, "")
      .replace("stroke-width", "strokeWidth")
      .replace("stroke-linecap", "strokeLinecap")
      .replace("stroke-linejoin", "strokeLinejoin")}
  )
  export default ${varName}
  `;
  fs.writeFileSync(`./${varName}.tsx`, newContent);
});
