'use strict';

(() => {

class EarthDrawer {
  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.width = canvas.width;
    this.height = canvas.height;
    // const _that = this;
  }

  draw(angle, func) {
    this.ctx.save();
    this.ctx.translate(this.width / 2, this.height / 2);
    this.ctx.rotate(Math.PI / 180 * -angle);
    this.ctx.beginPath();
    func(this.ctx);
    this.ctx.stroke();
    this.ctx.restore();
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
}

  class Earth {
    constructor(drawer) {
      this.r = 200;
      this.drawer = drawer;
      this.ctx = canvas.getContext('2d');
      this.width = canvas.width;
      this.height = canvas.height;
      // const _that = this;
    }

    drawFace() {
      for (let angle = 0; angle < 360; angle += 7.5) {
        this.drawer.draw(angle, ctx => {
          ctx.moveTo(0, -this.r);
          if (angle % 15 === 0) {
            // ctx.lineWidth = 3;
            ctx.lineTo(0, -this.r + 3);
            ctx.font ='13px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(angle / 15 || 24, 0, -this.r - 10);
          } else {
            ctx.lineTo(0, -this.r + 3);
          }
        });
      }
      let angle1 = 0;
        this.drawer.draw(angle1, ctx => {
          ctx.moveTo(0, -this.r);
            // ctx.lineTo(0, -this.r + 3);
            ctx.font ='13px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('夜', 0, -this.r - 25);
        });
      let angle2 = 90;
        this.drawer.draw(angle2, ctx => {
          ctx.moveTo(0, -this.r);
            // ctx.lineTo(0, -this.r + 3);
            ctx.font ='13px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('朝', 0, -this.r - 25);
        });
      let angle3 = 180;
        this.drawer.draw(angle3, ctx => {
          ctx.moveTo(0, -this.r);
            // ctx.lineTo(0, -this.r + 3);
            ctx.font ='13px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('昼', 0, -this.r - 25);
        });
      let angle4 = 270;
        this.drawer.draw(angle4, ctx => {
          ctx.moveTo(0, -this.r);
            // ctx.lineTo(0, -this.r + 3);
            ctx.font ='13px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('夕', 0, -this.r - 25);
        });
    }

    drawMeridians() {
      //北緯何度
      for (let ang = 0; ang < 360; ang += 20) {
        if(ang === 0) {
          this.drawer.draw(this.s * 6, ctx => {
          ctx.moveTo(0, 0);
          ctx.lineTo(-Math.sin(Math.PI * ang / 180) * this.r, -Math.cos(Math.PI * ang / 180) * this.r);
          ctx.setLineDash([4, 2]);
          ctx.fillText('+30', 0.87 * 0 * this.r, 0.87 * -1 * this.r + 10);     
          ctx.fillText('+60', 0.5 * 0 * this.r, 0.5 * -1 * this.r + 10);     
          ctx.fillText('+90', 1 * 0 * this.r, 0 * -1 * this.r + 10);     

          ctx.font ='13px Arial';
          ctx.textAlign = 'center';
          ctx.fillText(ang, -Math.sin(Math.PI * ang / 180) * this.r * 0.95, -Math.cos(Math.PI * ang / 180) * this.r * 0.95);
          });
        } else {
          // 経度
          this.drawer.draw(this.s * 6, ctx => {
          ctx.fillStyle = 'hsl(ang, 50%, 50%)';
          ctx.moveTo(0, 0);
          ctx.lineTo(-Math.sin(Math.PI * ang / 180) * this.r, -Math.cos(Math.PI * ang / 180) * this.r);
          ctx.setLineDash([1, 4]);
          ctx.font ='13px Arial';
          ctx.textAlign = 'center';
          ctx.fillText(ang, -Math.sin(Math.PI * ang / 180) * this.r * 0.95, -Math.cos(Math.PI * ang / 180) * this.r * 0.95);
          });
        }
      }

      // 北緯緯線
      for (let agl = 0; agl < 90; agl += 30) {
        this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(0, 50%, 50%)';
        // ctx.moveTo(0, 0.87);
        ctx.arc(0, 0, Math.cos(Math.PI * agl / 180) * this.r, 0, 2 * Math.PI);
        ctx.setLineDash([2, 4]);
      });
      }
     
      // グリーンランド
      this.drawer.draw(this.s * 6, ctx => {
        ctx.moveTo(this.r * Math.cos(Math.PI * 85 / 180) * Math.sin(Math.PI * 40 / 180), -this.r * Math.cos(Math.PI * 85 / 180) * Math.cos(Math.PI * 40 / 180));
        ctx.lineTo(this.r * Math.cos(Math.PI * 80 / 180) * Math.sin(Math.PI * 20 / 180), -this.r * Math.cos(Math.PI * 80 / 180) * Math.cos(Math.PI * 20 / 180));
        ctx.lineTo(this.r * Math.cos(Math.PI * 60 / 180) * Math.sin(Math.PI * 45 / 180), -this.r * Math.cos(Math.PI * 60 / 180) * Math.cos(Math.PI * 45 / 180));
        ctx.lineTo(this.r * Math.cos(Math.PI * 80 / 180) * Math.sin(Math.PI * 70 / 180), -this.r * Math.cos(Math.PI * 80 / 180) * Math.cos(Math.PI * 70 / 180));
        ctx.lineTo(this.r * Math.cos(Math.PI * 85 / 180) * Math.sin(Math.PI * 40 / 180), -this.r * Math.cos(Math.PI * 85 / 180) * Math.cos(Math.PI * 40 / 180));
      });
        // アメリカ大陸
        this.drawer.draw(this.s * 6, ctx => {
          ctx.lineTo(this.r * Math.cos(Math.PI * 70 / 180) * Math.sin(Math.PI * 170/ 180), -this.r * Math.cos(Math.PI * 70 / 180) * Math.cos(Math.PI * 170 / 180));
          ctx.lineTo(this.r * Math.cos(Math.PI * 50 / 180) * Math.sin(Math.PI * 55/ 180), -this.r * Math.cos(Math.PI * 50 / 180) * Math.cos(Math.PI * 55 / 180));
          ctx.lineTo(this.r * Math.cos(Math.PI * 30 / 180) * Math.sin(Math.PI * 90/ 180), -this.r * Math.cos(Math.PI * 30 / 180) * Math.cos(Math.PI * 90 / 180));
          ctx.lineTo(this.r * Math.cos(Math.PI * 10 / 180) * Math.sin(Math.PI * 80/ 180), -this.r * Math.cos(Math.PI * 10 / 180) * Math.cos(Math.PI * 80 / 180));
          ctx.lineTo(this.r * Math.cos(Math.PI * 0 / 180) * Math.sin(Math.PI * 50/ 180), -this.r * Math.cos(Math.PI * 0 / 180) * Math.cos(Math.PI *50 / 180));
          ctx.moveTo(this.r * Math.cos(Math.PI * 0 / 180) * Math.sin(Math.PI * 80/ 180), -this.r * Math.cos(Math.PI * 0 / 180) * Math.cos(Math.PI * 80 / 180));
          ctx.lineTo(this.r * Math.cos(Math.PI * 10 / 180) * Math.sin(Math.PI * 80/ 180), -this.r * Math.cos(Math.PI * 10 / 180) * Math.cos(Math.PI * 80 / 180));
          ctx.lineTo(this.r * Math.cos(Math.PI * 35 / 180) * Math.sin(Math.PI * 120/ 180), -this.r * Math.cos(Math.PI * 35 / 180) * Math.cos(Math.PI *120 / 180));
          ctx.lineTo(this.r * Math.cos(Math.PI * 70 / 180) * Math.sin(Math.PI * 170/ 180), -this.r * Math.cos(Math.PI * 70 / 180) * Math.cos(Math.PI * 170 / 180));
        });
        // ユーラシア・アフリカ大陸
        this.drawer.draw(this.s * 6, ctx => {
          ctx.moveTo(this.r * -Math.cos(Math.PI * 70 / 180) * Math.sin(Math.PI * 180 / 180), -this.r * Math.cos(Math.PI * 70 / 180) * Math.cos(Math.PI * 180 / 180));
          ctx.lineTo(this.r * -Math.cos(Math.PI * 60 / 180) * Math.sin(Math.PI * 140 / 180), -this.r * Math.cos(Math.PI * 60 / 180) * Math.cos(Math.PI * 140 / 180));
          ctx.lineTo(this.r * -Math.cos(Math.PI * 0 / 180) * Math.sin(Math.PI * 105 / 180), -this.r * Math.cos(Math.PI * 0 / 180) * Math.cos(Math.PI * 105 / 180));
          ctx.lineTo(this.r * -Math.cos(Math.PI * 20 / 180) * Math.sin(Math.PI * 90 / 180), -this.r * Math.cos(Math.PI * 20 / 180) * Math.cos(Math.PI * 90 / 180));
          ctx.lineTo(this.r * -Math.cos(Math.PI * 5 / 180) * Math.sin(Math.PI * 75 / 180), -this.r * Math.cos(Math.PI * 5 / 180) * Math.cos(Math.PI * 75 / 180));
          ctx.lineTo(this.r * -Math.cos(Math.PI * 25 / 180) * Math.sin(Math.PI * 60 / 180), -this.r * Math.cos(Math.PI * 25 / 180) * Math.cos(Math.PI * 60 / 180));
          ctx.lineTo(this.r * -Math.cos(Math.PI * 0 / 180) * Math.sin(Math.PI * 40 / 180), -this.r * Math.cos(Math.PI * 0 / 180) * Math.cos(Math.PI * 40 / 180));
          ctx.moveTo(this.r * -Math.cos(Math.PI * 0 / 180) * Math.sin(Math.PI * 10 / 180), -this.r * Math.cos(Math.PI * 0 / 180) * Math.cos(Math.PI * 10 / 180));
          ctx.lineTo(this.r * -Math.cos(Math.PI * 20 / 180) * Math.sin(Math.PI * 20 / 180), -this.r * Math.cos(Math.PI * 20 / 180) * Math.cos(Math.PI * 20 / 180));
          ctx.lineTo(this.r * -Math.cos(Math.PI * 35 / 180) * Math.sin(Math.PI * 10 / 180), -this.r * Math.cos(Math.PI * 35 / 180) * Math.cos(Math.PI * 10 / 180));
          ctx.lineTo(this.r * -Math.cos(Math.PI * 35 / 180) * Math.sin(Math.PI * 10 / 180), -this.r * Math.cos(Math.PI * 35 / 180) * Math.cos(Math.PI * 10 / 180));
          ctx.lineTo(this.r * -Math.cos(Math.PI * 30 / 180) * Math.sin(Math.PI * 30 / 180), -this.r * Math.cos(Math.PI * 30 / 180) * Math.cos(Math.PI * 30 / 180));
          ctx.lineTo(this.r * -Math.cos(Math.PI * 35 / 180) * Math.sin(Math.PI * 35 / 180), -this.r * Math.cos(Math.PI * 35 / 180) * Math.cos(Math.PI * 35 / 180));
          ctx.lineTo(this.r * -Math.cos(Math.PI * 35 / 180) * Math.sin(Math.PI * 10 / 180), -this.r * Math.cos(Math.PI * 35 / 180) * Math.cos(Math.PI * 10 / 180));
          ctx.lineTo(this.r * -Math.cos(Math.PI * 55 / 180) * Math.sin(Math.PI * 10 / 180), -this.r * Math.cos(Math.PI * 55 / 180) * Math.cos(Math.PI * 10 / 180));
          ctx.lineTo(this.r * -Math.cos(Math.PI * 60 / 180) * Math.sin(Math.PI * 5 / 180), -this.r * Math.cos(Math.PI * 60 / 180) * Math.cos(Math.PI * 5 / 180));
          ctx.lineTo(this.r * -Math.cos(Math.PI * 70 / 180) * Math.sin(Math.PI * 25 / 180), -this.r * Math.cos(Math.PI * 70 / 180) * Math.cos(Math.PI * 25 / 180));
          ctx.lineTo(this.r * -Math.cos(Math.PI * 75 / 180) * Math.sin(Math.PI * 100 / 180), -this.r * Math.cos(Math.PI * 75 / 180) * Math.cos(Math.PI * 100 / 180));
          ctx.lineTo(this.r * -Math.cos(Math.PI * 70 / 180) * Math.sin(Math.PI * 180 / 180), -this.r * Math.cos(Math.PI * 70 / 180) * Math.cos(Math.PI * 180 / 180));
        });
        // 日本
        this.drawer.draw(this.s * 6, ctx => {
          ctx.fillStyle = 'pink';
          ctx.moveTo(this.r * -Math.cos(Math.PI * 45 / 180) * Math.sin(Math.PI * 145 / 180), -this.r * Math.cos(Math.PI * 45 / 180) * Math.cos(Math.PI * 145 / 180));
          ctx.lineTo(this.r * -Math.cos(Math.PI * 35 / 180) * Math.sin(Math.PI * 140 / 180), -this.r * Math.cos(Math.PI * 35 / 180) * Math.cos(Math.PI * 140 / 180));
          ctx.lineTo(this.r * -Math.cos(Math.PI * 30 / 180) * Math.sin(Math.PI * 130 / 180), -this.r * Math.cos(Math.PI * 30 / 180) * Math.cos(Math.PI * 130 / 180));
          ctx.lineTo(this.r * -Math.cos(Math.PI * 45 / 180) * Math.sin(Math.PI * 145 / 180), -this.r * Math.cos(Math.PI * 45 / 180) * Math.cos(Math.PI * 145 / 180));
          ctx.fill();
        });
        // イギリス
        this.drawer.draw(this.s * 6, ctx => {
            ctx.moveTo(this.r * Math.cos(Math.PI * 60 / 180) * Math.sin(Math.PI * 5 / 180), -this.r * Math.cos(Math.PI * 60 / 180) * Math.cos(Math.PI * 5 / 180));
            ctx.font ='16px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('英国', this.r * this.co60 * this.si5 + 30, -this.r * this.co60 * this.co5 - 10);
            ctx.lineTo(this.r * Math.cos(Math.PI * 50 / 180) * Math.sin(Math.PI * 0 / 180), -this.r * Math.cos(Math.PI * 50 / 180) * Math.cos(Math.PI * 0 / 180));
            ctx.lineTo(this.r * Math.cos(Math.PI * 50 / 180) * Math.sin(Math.PI * 10 / 180), -this.r * Math.cos(Math.PI * 50 / 180) * Math.cos(Math.PI * 10 / 180));
            ctx.lineTo(this.r * Math.cos(Math.PI * 60 / 180) * Math.sin(Math.PI * 5 / 180), -this.r * Math.cos(Math.PI * 60 / 180) * Math.cos(Math.PI * 5 / 180));
        });

    } 
    
    update() {
      this.h = (new Date()).getHours();
      // this.m = (new Date()).getMinutes();
      this.s = (new Date()).getSeconds();
    }
    
    run() {
      this.update();

      this.drawer.clear();
      this.drawFace();
      this.drawMeridians();

      setTimeout(() => {
        this.run();

      }, 100);
    }
  }

  const canvas = document.querySelector('#NorthGlobe');
  if (typeof canvas.getContext === 'undefined') {
    return;
  }

  const earth = new Earth(new EarthDrawer(canvas));
  earth.run();
})();




// 南半球

(() => {
  
  class EarthDrawer {
    constructor(canvas) {
      this.ctx = canvas.getContext('2d');
      this.width = canvas.width;
      this.height = canvas.height;
    }
  
    draw(angle, func) {
      this.ctx.save();
      this.ctx.translate(this.width / 2, this.height / 2);
      this.ctx.rotate(Math.PI / 180 * angle);
      this.ctx.beginPath();
      func(this.ctx);
      this.ctx.stroke();
      this.ctx.restore();
    }
  
    clear() {
      this.ctx.clearRect(0, 0, this.width, this.height);
    }
  }
  
    class Earth {
      constructor(drawer) {
        this.r = 200;
        this.si0 = 0;
        this.si5 = 0.09;
        this.si10 = 0.17;
        this.si20 = 0.34;
        this.si25 = 0.42;
        this.si30 = 0.5;
        this.si35 = 0.57;
        this.si40 = 0.64;
        this.si45 = 0.71;
        this.si50 = 0.77;
        this.si55 = 0.82;
        this.si60 = 0.87;
        this.si70 = 0.94;
        this.si75 = 0.97;
        this.si80 = 0.98;
        this.si90 = 1;
        this.si95 = 1;
        this.si100 = 0.98;
        this.si105 = 0.97;
        this.si115 = 0.91;
        this.si120 = 0.87;
        this.si130 = 0.77;
        this.si140 = 0.64;
        this.si145 = 0.57;
        this.si150 = 0.5;
        this.si160 = 0.34;
        this.si170 = 0.17;
        this.si180 = 0;
        this.co0 = 1;
        this.co5 = 1;
        this.co10 = 0.98;
        this.co20 = 0.94;
        this.co25 = 0.91;
        this.co30 = 0.87;
        this.co35 = 0.82;
        this.co40 = 0.77;
        this.co45 = 0.71;
        this.co50 = 0.64;
        this.co55 = 0.57;
        this.co60 = 0.50;
        this.co65 = 0.42;
        this.co70 = 0.34;
        this.co75 = 0.26;
        this.co80 = 0.17;
        this.co85 = 0.09;
        this.co90 = 0;
        this.co95 = -0.09;
        this.co100 = -0.17;
        this.co105 = -0.26;
        this.co115 = -0.42;
        this.co120 = -0.5;
        this.co130 = -0.64;
        this.co140 = -0.77;
        this.co145 = -0.82;
        this.co150 = -0.87;
        this.co160 = -0.94;
        this.co170 = -0.98;
        this.co180 = -1;
       
        this.drawer = drawer;
  
      }
  
      drawFace() {
        for (let angle = 0; angle < 360; angle += 7.5) {
          this.drawer.draw(angle, ctx => {
            ctx.moveTo(0, -this.r + 3);
            if (angle % 15 === 0) {
              // ctx.lineWidth = 3;
              ctx.lineTo(0, -this.r);
              ctx.font ='13px Arial';
              ctx.textAlign = 'center';
              ctx.fillText(angle / 15 || 24, 0, this.r + 15);
            } else {
              ctx.lineTo(0, -this.r);
            }
          });
        }
        let angle1 = 0;
          this.drawer.draw(angle1, ctx => {
            ctx.moveTo(0, -this.r);
              // ctx.lineTo(0, -this.r + 3);
              ctx.font ='13px Arial';
              ctx.textAlign = 'center';
              ctx.fillText('昼', 0, -this.r - 25);
          });
        let angle2 = 90;
          this.drawer.draw(angle2, ctx => {
            ctx.moveTo(0, -this.r);
              // ctx.lineTo(0, -this.r + 3);
              ctx.font ='13px Arial';
              ctx.textAlign = 'center';
              ctx.fillText('夕', 0, -this.r - 25);
          });
        let angle3 = 180;
          this.drawer.draw(angle3, ctx => {
            ctx.moveTo(0, -this.r);
              // ctx.lineTo(0, -this.r + 3);
              ctx.font ='13px Arial';
              ctx.textAlign = 'center';
              ctx.fillText('夜', 0, -this.r - 25);
          });
        let angle4 = 270;
          this.drawer.draw(angle4, ctx => {
            ctx.moveTo(0, -this.r);
              // ctx.lineTo(0, -this.r + 3);
              ctx.font ='13px Arial';
              ctx.textAlign = 'center';
              ctx.fillText('朝', 0, -this.r - 25);
          });
      }
  
      drawMeridians() {
        // 経度０度
        this.drawer.draw(this.s * 6, ctx => {
          ctx.fillStyle = 'hsl(0, 50%, 50%)';
          ctx.moveTo(0, 0);
          ctx.lineTo(0 * this.r, 1 * this.r);
          ctx.setLineDash([4, 2]);
          ctx.font ='13px Arial';
          ctx.textAlign = 'center';
          ctx.fillText(0, 0 * this.r, 1 * this.r * 0.95);     
          ctx.moveTo(0.87 * 0 * this.r, 0.87 * -1 * this.r);
          ctx.fillText('-30', 0.87 * 0 * this.r, 0.87 * -1 * this.r + 10);     
          ctx.moveTo(0 * this.r, -1 * this.r);
          ctx.fillText('-60', 0.5 * 0 * this.r, 0.5 * -1 * this.r + 10);     
          ctx.moveTo(0 * this.r, -1 * this.r);
          ctx.fillText('-90', 1 * 0 * this.r, 0 * -1 * this.r + 10);     
        });
        // 東経20度
        this.drawer.draw(this.s * 6, ctx => {
          ctx.fillStyle = 'hsl(20, 50%, 50%)';
          ctx.moveTo(0, 0);
          ctx.lineTo(-0.34 * this.r, 0.94 * this.r);
          ctx.setLineDash([1, 4]);
          ctx.font ='13px Arial';
          ctx.textAlign = 'center';
          ctx.fillText(20, -0.34 * this.r * 0.95, 0.94 * this.r * 0.95);
        });
        // 東経40度
        this.drawer.draw(this.s * 6, ctx => {
          ctx.fillStyle = 'hsl(40, 50%, 50%)';
          ctx.moveTo(0, 0);
          ctx.lineTo(-0.64 * this.r, 0.77 * this.r);
          ctx.setLineDash([1, 4]);
          ctx.font ='13px Arial';
          ctx.textAlign = 'center';
          ctx.fillText(40, -0.64 * this.r * 0.95, 0.77 * this.r * 0.95);
        });
        // 東経60度
        this.drawer.draw(this.s * 6, ctx => {
          ctx.fillStyle = 'hsl(60, 50%, 50%)';
          ctx.moveTo(0, 0);
          ctx.lineTo(-0.87 * this.r, 0.50 * this.r);
          ctx.setLineDash([1, 4]);
          ctx.font ='13px Arial';
          ctx.textAlign = 'center';
          ctx.fillText(60, -0.87 * this.r * 0.95, 0.50 * this.r * 0.95);
        });
        // 東経80度
        this.drawer.draw(this.s * 6, ctx => {
          ctx.fillStyle = 'hsl(80, 50%, 50%)';
          ctx.moveTo(0, 0);
          ctx.lineTo(-0.98 * this.r, 0.17 * this.r);
          ctx.setLineDash([1, 4]);
          ctx.font ='13px Arial';
          ctx.textAlign = 'center';
          ctx.fillText(80, -0.98* this.r * 0.95, 0.17 * this.r * 0.95);
        });
        // 東経100度
        this.drawer.draw(this.s * 6, ctx => {
          ctx.fillStyle = 'hsl(100, 50%, 50%)';
          ctx.moveTo(0, 0);
          ctx.lineTo(-0.98 * this.r, -0.17 * this.r);
          ctx.setLineDash([1, 4]);
          ctx.font ='13px Arial';
          ctx.textAlign = 'center';
          ctx.fillText(100, -0.98* this.r * 0.92, -0.17 * this.r * 0.92);
        });
        // 東経120度
        this.drawer.draw(this.s * 6, ctx => {
          ctx.fillStyle = 'hsl(120, 50%, 50%)';
          ctx.moveTo(0, 0);
          ctx.lineTo(-0.87 * this.r, -0.50 * this.r);
          ctx.setLineDash([1, 4]);
          ctx.font ='13px Arial';
          ctx.textAlign = 'center';
          ctx.fillText(120, -0.87 * this.r * 0.92, -0.50 * this.r * 0.92);
        });
        // 東経140度
        this.drawer.draw(this.s * 6, ctx => {
          ctx.fillStyle = 'hsl(140, 50%, 50%)';
          ctx.moveTo(0, 0);
          ctx.lineTo(-0.64 * this.r, -0.77 * this.r);
          ctx.setLineDash([1, 4]);
          ctx.font ='13px Arial';
          ctx.textAlign = 'center';
          ctx.fillText(140, -0.64 * this.r * 0.92, -0.77 * this.r * 0.92);
        });
        // 東経160度
        this.drawer.draw(this.s * 6, ctx => {
          ctx.fillStyle = 'hsl(160, 50%, 50%)';
          ctx.moveTo(0, 0);
          ctx.lineTo(-0.34 * this.r, -0.94 * this.r);
          ctx.setLineDash([1, 4]);
          ctx.font ='13px Arial';
          ctx.textAlign = 'center';
          ctx.fillText(160, -0.34 * this.r * 0.92, -0.94 * this.r * 0.92);
        });
        // 経度180度
        this.drawer.draw(this.s * 6, ctx => {
          ctx.fillStyle = 'hsl(180, 50%, 50%)';
          ctx.moveTo(0, 0);
          ctx.lineTo(0 * this.r, -1 * this.r);
          ctx.setLineDash([4, 2]);
          ctx.font ='13px Arial';
          ctx.textAlign = 'center';
          ctx.fillText(180, 0 * this.r * 0.92, -1 * this.r * 0.92);
        });
        // 西経160度
        this.drawer.draw(this.s * 6, ctx => {
          ctx.fillStyle = 'hsl(200, 50%, 50%)';
          ctx.moveTo(0, 0);
          ctx.lineTo(0.34 * this.r, -0.94 * this.r);
          ctx.setLineDash([1, 4]);
          ctx.font ='13px Arial';
          ctx.textAlign = 'center';
          ctx.fillText(-160, 0.34 * this.r * 0.92, -0.94 * this.r * 0.92);
        });
        // 西経140度
        this.drawer.draw(this.s * 6, ctx => {
          ctx.fillStyle = 'hsl(220, 50%, 50%)';
          ctx.moveTo(0, 0);
          ctx.lineTo(0.64 * this.r, -0.77 * this.r);
          ctx.setLineDash([1, 4]);
          ctx.font ='13px Arial';
          ctx.textAlign = 'center';
          ctx.fillText(-140, 0.64 * this.r * 0.92, -0.77 * this.r * 0.92);
        });
        // 西経120度
        this.drawer.draw(this.s * 6, ctx => {
          ctx.fillStyle = 'hsl(240, 50%, 50%)';
          ctx.moveTo(0, 0);
          ctx.lineTo(0.87 * this.r, -0.50 * this.r);
          ctx.setLineDash([1, 4]);
          ctx.font ='13px Arial';
          ctx.textAlign = 'center';
          ctx.fillText(-120, 0.87 * this.r * 0.92, -0.50 * this.r * 0.92);
        });
        // 西経100度
        this.drawer.draw(this.s * 6, ctx => {
          ctx.fillStyle = 'hsl(260, 50%, 50%)';
          ctx.moveTo(0, 0);
          ctx.lineTo(0.98 * this.r, -0.17 * this.r);
          ctx.setLineDash([1, 4]);
          ctx.font ='13px Arial';
          ctx.textAlign = 'center';
          ctx.fillText(-100, 0.98 * this.r * 0.92, -0.17 * this.r * 0.92);
        });
        // 西経80度
        this.drawer.draw(this.s * 6, ctx => {
          ctx.fillStyle = 'hsl(280, 50%, 50%)';
          ctx.moveTo(0, 0);
          ctx.lineTo(0.98 * this.r, 0.17 * this.r);
          ctx.setLineDash([1, 4]);
          ctx.font ='13px Arial';
          ctx.textAlign = 'center';
          ctx.fillText(-80, 0.98 * this.r * 0.95, 0.17 * this.r * 0.95);
        });
        // 西経60度
        this.drawer.draw(this.s * 6, ctx => {
          ctx.fillStyle = 'hsl(300, 50%, 50%)';
          ctx.moveTo(0, 0);
          ctx.lineTo(0.87 * this.r, 0.50 * this.r);
          ctx.setLineDash([1, 4]);
          ctx.font ='13px Arial';
          ctx.textAlign = 'center';
          ctx.fillText(-60, 0.87 * this.r * 0.95, 0.50 * this.r * 0.95);
        });
        // 西経40度
        this.drawer.draw(this.s * 6, ctx => {
          ctx.fillStyle = 'hsl(320, 50%, 50%)';
          ctx.moveTo(0, 0);
          ctx.lineTo(0.64 * this.r, 0.77 * this.r);
          ctx.setLineDash([1, 4]);
          ctx.font ='13px Arial';
          ctx.textAlign = 'center';
          ctx.fillText(-40, 0.64 * this.r * 0.95, 0.77 * this.r * 0.95);
        });
        // 西経20度
        this.drawer.draw(this.s * 6, ctx => {
          ctx.fillStyle = 'hsl(340, 50%, 50%)';
          ctx.moveTo(0, 0);
          ctx.lineTo(0.34 * this.r, 0.94 * this.r);
          ctx.setLineDash([1, 4]);
          ctx.font ='13px Arial';
          ctx.textAlign = 'center';
          ctx.fillText(-20, 0.34 * this.r * 0.95, 0.94 * this.r * 0.95);
        });
        // 南緯0度
        this.drawer.draw(this.s * 6, ctx => {
          ctx.fillStyle = 'hsl(0, 50%, 50%)';
          // ctx.moveTo(0, 0.87);
          ctx.arc(0, 0, 1 * this.r, 0, 2 * Math.PI);
          ctx.setLineDash([2, 4]);
        });
        // 南緯30度
        this.drawer.draw(this.s * 6, ctx => {
          ctx.fillStyle = 'hsl(0, 50%, 50%)';
          ctx.arc(0, 0, 0.87 * this.r, 0, 2 * Math.PI);
          ctx.setLineDash([1, 4]);
        });
        // 南緯60度
        this.drawer.draw(this.s * 6, ctx => {
          ctx.fillStyle = 'hsl(0, 50%, 50%)';
          ctx.arc(0, 0, 0.5 * this.r, 0, 2 * Math.PI);
          ctx.setLineDash([1, 4]);
        });
        
  
        //南アメリカ
        this.drawer.draw(this.s * 6, ctx => {
          ctx.moveTo(this.r * this.co0 * this.si50, this.r * this.co0 * this.co50);
          ctx.lineTo(this.r * this.co5 * this.si35, this.r * this.co5 * this.co35);
          ctx.lineTo(this.r * this.co55 * this.si70, this.r * this.co55 * this.co70);
          ctx.lineTo(this.r * this.co0 * this.si80, this.r * this.co0 * this.co80);
      });
  
        //アフリカ
        this.drawer.draw(this.s * 6, ctx => {
          ctx.moveTo(this.r * this.co0 * -this.si40, this.r * this.co0 * this.co40);
          ctx.lineTo(this.r * this.co45 * -this.si20, this.r * this.co45 * this.co20);
          ctx.lineTo(this.r * this.co5 * -this.si10, this.r * this.co5 * this.co10);
          ctx.lineTo(this.r * this.co0 * -this.si10, this.r * this.co0 * this.co10);
      });
  
        //オーストラリア
        this.drawer.draw(this.s * 6, ctx => {
          ctx.moveTo(this.r * this.co10 * -this.si140, this.r * this.co10 * this.co140);
          ctx.lineTo(this.r * this.co25 * -this.si150, this.r * this.co25 * this.co150);
          ctx.lineTo(this.r * this.co40 * -this.si145, this.r * this.co40 * this.co145);
          ctx.lineTo(this.r * this.co35 * -this.si115, this.r * this.co35 * this.co115);
          ctx.lineTo(this.r * this.co20 * -this.si115, this.r * this.co20 * this.co115);
          ctx.lineTo(this.r * this.co10 * -this.si140, this.r * this.co10 * this.co140);
      });
  
        //南極
        this.drawer.draw(this.s * 6, ctx => {
          ctx.font ='16px Arial';
          ctx.textAlign = 'center';
          ctx.fillText('南極', 0, -20);
          ctx.fillStyle = 'hsla(180, 50%, 50%, 0.2)';
          ctx.moveTo(this.r * this.co80 * this.si40, this.r * this.co80 * this.co40);
          ctx.lineTo(this.r * this.co60 * this.si60, this.r * this.co60 * this.co60);
          ctx.lineTo(this.r * this.co75 * this.si160, this.r * this.co75 * this.co160);
          ctx.lineTo(this.r * this.co65 * -this.si140, this.r * this.co65 * this.co140);
          ctx.lineTo(this.r * this.co65 * -this.si100, this.r * this.co65 * this.co100);
          ctx.lineTo(this.r * this.co65 * -this.si60, this.r * this.co65 * this.co60);
          ctx.lineTo(this.r * this.co70 * this.si0, this.r * this.co70 * this.co0);
          ctx.lineTo(this.r * this.co80 * this.si40, this.r * this.co80 * this.co40);
          ctx.fill();
      });
  
      } 
      
      update() {
        this.h = (new Date()).getHours();
        // this.m = (new Date()).getMinutes();
        this.s = (new Date()).getSeconds();
      }
      
      run() {
        this.update();
  
        this.drawer.clear();
        this.drawFace();
        this.drawMeridians();
  
        setTimeout(() => {
          this.run();
  
        }, 100);
      }
    }
  
    const canvas = document.querySelector('#SouthGlobe');
    if (typeof canvas.getContext === 'undefined') {
      return;
    }
  
    const earth = new Earth(new EarthDrawer(canvas));
    earth.run();
  })();
  

  

// 側面半球
  
(() => {
  class GlobeDrawer {
      constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        this.r = 200;
     }

     draw(angle) {

      //  this.ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      //  this.ctx.fillRect(0, 0, this.width, this.height); 
       this.ctx.clearRect(0, 0, this.width, this.height);
       this.ctx.save();

       this.ctx.translate(this.width / 2, this.height / 2);
     
       this.ctx.beginPath();
       this.ctx.moveTo(0, -this.r);
      //  this.ctx.lineTo(0, -this.r + 5);
      //  this.ctx.strokeStyle = '#999';
       this.ctx.lineWidth = 1;
       this.ctx.fillStyle = 'skyblue'
       this.ctx.ellipse(0, 0, this.r * Math.abs(Math.cos(Math.PI / 180 * angle)), this.r, 0, -Math.PI / 2, Math.PI / 2 * 3);
       this.ctx.ellipse(0, 0, this.r * Math.abs(Math.cos(Math.PI / 180 * angle + 20)), this.r, 0,-Math.PI / 2, Math.PI / 2 * 3);
       this.ctx.ellipse(0, 0, this.r * Math.abs(Math.cos(Math.PI / 180 * angle + 40)), this.r, 0, -Math.PI / 2, Math.PI / 2 * 3);
       this.ctx.ellipse(0, 0, this.r * Math.abs(Math.cos(Math.PI / 180 * angle + 60)), this.r, 0, -Math.PI / 2, Math.PI / 2 * 3);
       this.ctx.ellipse(0, 0, this.r * Math.abs(Math.cos(Math.PI / 180 * angle + 80)), this.r, 0, -Math.PI / 2, Math.PI / 2 * 3);
       this.ctx.ellipse(0, 0, this.r * Math.abs(Math.cos(Math.PI / 180 * angle + 100)), this.r, 0, -Math.PI / 2, Math.PI / 2 * 3);
       this.ctx.ellipse(0, 0, this.r * Math.abs(Math.cos(Math.PI / 180 * angle + 120)), this.r, 0, -Math.PI / 2, Math.PI / 2 * 3);
       this.ctx.ellipse(0, 0, this.r * Math.abs(Math.cos(Math.PI / 180 * angle + 140)), this.r, 0, -Math.PI / 2, Math.PI / 2 * 3);
       this.ctx.ellipse(0, 0, this.r * Math.abs(Math.cos(Math.PI / 180 * angle + 160)), this.r, 0, -Math.PI / 2, Math.PI / 2 * 3);
       this.ctx.ellipse(0, 0, this.r * Math.abs(Math.cos(Math.PI / 180 * angle + 180)), this.r, 0, -Math.PI / 2, Math.PI / 2 * 3);
       this.ctx.stroke();
       this.ctx.fill();
       
       
       // 日本
       this.ctx.beginPath();
       this.ctx.fillStyle = 'pink';
       this.ctx.moveTo(-this.r * Math.cos(Math.PI / 180 * 30) * Math.sin(Math.PI / 180 * (angle + 130)), -this.r * Math.sin(Math.PI / 180 * 30));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 35) * Math.sin(Math.PI / 180 * (angle + 140)), -this.r * Math.sin(Math.PI / 180 * 35));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 45) * Math.sin(Math.PI / 180 * (angle + 145)), -this.r * Math.sin(Math.PI / 180 * 45));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 30) * Math.sin(Math.PI / 180 * (angle + 130)), -this.r * Math.sin(Math.PI / 180 * 30));
       this.ctx.fill();
       
       // 南北アメリカ
       this.ctx.fillStyle = '#ddd'
       this.ctx.moveTo(-this.r * Math.cos(Math.PI / 180 * 70) * Math.sin(Math.PI / 180 * (angle - 170)), -this.r * Math.sin(Math.PI / 180 * 70));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 70) * Math.sin(Math.PI / 180 * (angle - 90)), -this.r * Math.sin(Math.PI / 180 * 70));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 50) * Math.sin(Math.PI / 180 * (angle - 55)), -this.r * Math.sin(Math.PI / 180 * 50));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 30) * Math.sin(Math.PI / 180 * (angle - 90)), -this.r * Math.sin(Math.PI / 180 * 30));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 10) * Math.sin(Math.PI / 180 * (angle - 80)), -this.r * Math.sin(Math.PI / 180 * 10));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 0) * Math.sin(Math.PI / 180 * (angle - 50)), -this.r * Math.sin(Math.PI / 180 * 0));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 5) * Math.sin(Math.PI / 180 * (angle - 35)), this.r * Math.sin(Math.PI / 180 * 5));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 55) * Math.sin(Math.PI / 180 * (angle - 70)), this.r * Math.sin(Math.PI / 180 * 55));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 0) * Math.sin(Math.PI / 180 * (angle - 80)), this.r * Math.sin(Math.PI / 180 * 0));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 10) * Math.sin(Math.PI / 180 * (angle - 80)), -this.r * Math.sin(Math.PI / 180 * 10));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 35) * Math.sin(Math.PI / 180 * (angle - 120)), -this.r * Math.sin(Math.PI / 180 * 35));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 70) * Math.sin(Math.PI / 180 * (angle - 170)), -this.r * Math.sin(Math.PI / 180 * 70));
       this.ctx.fill();
       
       // グリーンランド
       this.ctx.fillStyle = '#ddd'
       this.ctx.moveTo(-this.r * Math.cos(Math.PI / 180 * 85) * Math.sin(Math.PI / 180 * (angle - 40)), -this.r * Math.sin(Math.PI / 180 * 85));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 80) * Math.sin(Math.PI / 180 * (angle - 20)), -this.r * Math.sin(Math.PI / 180 * 80));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 60) * Math.sin(Math.PI / 180 * (angle - 45)), -this.r * Math.sin(Math.PI / 180 * 60));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 80) * Math.sin(Math.PI / 180 * (angle - 70)), -this.r * Math.sin(Math.PI / 180 * 80));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 85) * Math.sin(Math.PI / 180 * (angle - 40)), -this.r * Math.sin(Math.PI / 180 * 85));
       this.ctx.fill();

       // ユーラシア・アフリカ
       this.ctx.fillStyle = '#ddd'
       this.ctx.moveTo(-this.r * Math.cos(Math.PI / 180 * 70) * Math.sin(Math.PI / 180 * (angle + 180)), -this.r * Math.sin(Math.PI / 180 * 70));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 60) * Math.sin(Math.PI / 180 * (angle + 140)), -this.r * Math.sin(Math.PI / 180 * 60));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 0) * Math.sin(Math.PI / 180 * (angle + 105)), -this.r * Math.sin(Math.PI / 180 * 0));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 20) * Math.sin(Math.PI / 180 * (angle + 90)), -this.r * Math.sin(Math.PI / 180 * 20));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 5) * Math.sin(Math.PI / 180 * (angle + 75)), -this.r * Math.sin(Math.PI / 180 * 5));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 25) * Math.sin(Math.PI / 180 * (angle + 60)), -this.r * Math.sin(Math.PI / 180 * 25));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 0) * Math.sin(Math.PI / 180 * (angle + 40)), -this.r * Math.sin(Math.PI / 180 * 0));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 45) * Math.sin(Math.PI / 180 * (angle + 20)), this.r * Math.sin(Math.PI / 180 * 45));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 5) * Math.sin(Math.PI / 180 * (angle + 10)), this.r * Math.sin(Math.PI / 180 * 5));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 0) * Math.sin(Math.PI / 180 * (angle + 10)), -this.r * Math.sin(Math.PI / 180 * 0));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 20) * Math.sin(Math.PI / 180 * (angle - 20)), -this.r * Math.sin(Math.PI / 180 * 20));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 35) * Math.sin(Math.PI / 180 * (angle - 10)), -this.r * Math.sin(Math.PI / 180 * 35));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 30) * Math.sin(Math.PI / 180 * (angle + 30)), -this.r * Math.sin(Math.PI / 180 * 30));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 35) * Math.sin(Math.PI / 180 * (angle + 35)), -this.r * Math.sin(Math.PI / 180 * 35));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 35) * Math.sin(Math.PI / 180 * (angle - 10)), -this.r * Math.sin(Math.PI / 180 * 35));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 55) * Math.sin(Math.PI / 180 * (angle + 10)), -this.r * Math.sin(Math.PI / 180 * 55));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 60) * Math.sin(Math.PI / 180 * (angle + 5)), -this.r * Math.sin(Math.PI / 180 * 60));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 70) * Math.sin(Math.PI / 180 * (angle + 25)), -this.r * Math.sin(Math.PI / 180 * 70));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 75) * Math.sin(Math.PI / 180 * (angle + 100)), -this.r * Math.sin(Math.PI / 180 * 75));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 70) * Math.sin(Math.PI / 180 * (angle + 180)), -this.r * Math.sin(Math.PI / 180 * 70));
       this.ctx.fill();
       
       // 英国
       this.ctx.fillStyle = '#ddd'
       this.ctx.moveTo(-this.r * Math.cos(Math.PI / 180 * 60) * Math.sin(Math.PI / 180 * (angle - 5)), -this.r * Math.sin(Math.PI / 180 * 60));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 50) * Math.sin(Math.PI / 180 * (angle + 0)), -this.r * Math.sin(Math.PI / 180 * 50));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 50) * Math.sin(Math.PI / 180 * (angle - 10)), -this.r * Math.sin(Math.PI / 180 * 50));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 60) * Math.sin(Math.PI / 180 * (angle - 5)), -this.r * Math.sin(Math.PI / 180 * 60));
       this.ctx.fill();
       
       // オーストラリア
       this.ctx.fillStyle = '#ddd'
       this.ctx.moveTo(-this.r * Math.cos(Math.PI / 180 * 10) * Math.sin(Math.PI / 180 * (angle + 140)), this.r * Math.sin(Math.PI / 180 * 10));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 25) * Math.sin(Math.PI / 180 * (angle + 150)), this.r * Math.sin(Math.PI / 180 * 25));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 40) * Math.sin(Math.PI / 180 * (angle + 145)), this.r * Math.sin(Math.PI / 180 * 40));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 35) * Math.sin(Math.PI / 180 * (angle + 115)), this.r * Math.sin(Math.PI / 180 * 35));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 20) * Math.sin(Math.PI / 180 * (angle + 115)), this.r * Math.sin(Math.PI / 180 * 20));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 10) * Math.sin(Math.PI / 180 * (angle + 140)), this.r * Math.sin(Math.PI / 180 * 10));
       this.ctx.fill();
       
       // 南極
       this.ctx.fillStyle = '#ddd'
       this.ctx.moveTo(-this.r * Math.cos(Math.PI / 180 * 80) * Math.sin(Math.PI / 180 * (angle - 40)), this.r * Math.sin(Math.PI / 180 * 80));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 60) * Math.sin(Math.PI / 180 * (angle - 60)), this.r * Math.sin(Math.PI / 180 * 60));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 75) * Math.sin(Math.PI / 180 * (angle - 160)), this.r * Math.sin(Math.PI / 180 * 75));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 65) * Math.sin(Math.PI / 180 * (angle + 140)), this.r * Math.sin(Math.PI / 180 * 65));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 65) * Math.sin(Math.PI / 180 * (angle + 100)), this.r * Math.sin(Math.PI / 180 * 65));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 65) * Math.sin(Math.PI / 180 * (angle + 60)), this.r * Math.sin(Math.PI / 180 * 65));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 70) * Math.sin(Math.PI / 180 * (angle + 0)), this.r * Math.sin(Math.PI / 180 * 70));
       this.ctx.fill();


       this.ctx.stroke();
       this.ctx.restore();
    
  }
}

class Globe {
  constructor(drawer) {
    this.drawer = drawer;
    this.angle = 0;
  }

  draw() {
    this.drawer.draw(this.angle);
  }

    clear() {
      this.ctx.clearRect(0, 0, this.width, this.height); 
    }

    update() {
      this.angle += 1;
    }

    run() {
      this.update();
      this.draw();

      setTimeout(() => {
        this.run();
      }, 100);

    }
  }

  const canvas = document.querySelector('#SideGlobe');
  if (typeof canvas.getContext === 'undefined') {
    return;
  }

  const globe = new Globe(new GlobeDrawer(canvas));
  globe.run();
})();



// 夏半球


(() => {
  class GlobeDrawer {
      constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        this.r = 200;
     }

     draw(angle) {

       //  this.ctx.fillRect(0, 0, this.width, this.height); 
       this.ctx.clearRect(0, 0, this.width, this.height);
       this.ctx.save();
       
       this.ctx.translate(this.width / 2, this.height / 2);
       
       this.ctx.beginPath();
       this.ctx.moveTo(0, -this.r);
       
       this.ctx.arc( 0, 0, this.r, -Math.PI / 2, Math.PI / 2 * 3);
       
       this.ctx.ellipse(0, -this.r * Math.sin(Math.PI / 180 * 60) * Math.cos(Math.PI / 180 * 23.4), this.r * Math.cos(Math.PI / 180 * 60), this.r * Math.cos(Math.PI / 180 * 60) * Math.sin(Math.PI / 180 * 23.4), 0, -Math.PI / 2, Math.PI / 2 * 3);
       
       this.ctx.ellipse(0, -this.r * Math.sin(Math.PI / 180 * 30) * Math.cos(Math.PI / 180 * 23.4), this.r * Math.cos(Math.PI / 180 * 30), this.r * Math.cos(Math.PI / 180 * 30) * Math.sin(Math.PI / 180 * 23.4), 0, -Math.PI / 2, Math.PI / 2 * 3);
       
       this.ctx.ellipse(0, -this.r * Math.sin(Math.PI / 180 * 0) * Math.cos(Math.PI / 180 * 23.4), this.r * Math.cos(Math.PI / 180 * 0), this.r * Math.cos(Math.PI / 180 * 0) * Math.sin(Math.PI / 180 * 23.4), 0, -Math.PI / 2, Math.PI / 2 * 3);
       
       this.ctx.ellipse(0, -this.r * Math.sin(Math.PI / 180 * -30) * Math.cos(Math.PI / 180 * 23.4), this.r * Math.cos(Math.PI / 180 * -30), this.r * Math.cos(Math.PI / 180 * -30) * Math.sin(Math.PI / 180 * 23.4), 0, -Math.PI / 2, Math.PI / 2 * 3);
       
       this.ctx.ellipse(0, -this.r * Math.sin(Math.PI / 180 * -60) * Math.cos(Math.PI / 180 * 23.4), this.r * Math.cos(Math.PI / 180 * -60), this.r * Math.cos(Math.PI / 180 * -60) * Math.sin(Math.PI / 180 * 23.4), 0, -Math.PI / 2, Math.PI / 2 * 3);
       
       this.ctx.ellipse(0, 0, this.r * Math.abs(Math.cos(Math.PI / 180 * (angle + 90))), this.r, 0, -Math.PI / 2, Math.PI / 2 * 3);
       
       
      //  this.ctx.fillStyle = 'hsls(180, 50%, 50%, 0.3)';
      
      // 日本
       this.ctx.moveTo(-this.r * Math.cos(Math.PI / 180 * 45) * Math.sin(Math.PI / 180 * (angle + 145)), -this.r * Math.sin(Math.PI / 180 * 45) * Math.cos(Math.PI / 180 * 23.4) - this.r * Math.cos(Math.PI / 180 * 45) * Math.cos(Math.PI / 180 * (angle + 145)) * Math.sin(Math.PI / 180 * 23.4));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 35) * Math.sin(Math.PI / 180 * (angle + 140)), -this.r * Math.sin(Math.PI / 180 * 35) * Math.cos(Math.PI / 180 * 23.4) - this.r * Math.cos(Math.PI / 180 * 35) * Math.cos(Math.PI / 180 * (angle + 140)) * Math.sin(Math.PI / 180 * 23.4));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 30) * Math.sin(Math.PI / 180 * (angle + 130)), -this.r * Math.sin(Math.PI / 180 * 30) * Math.cos(Math.PI / 180 * 23.4) - this.r * Math.cos(Math.PI / 180 * 30) * Math.cos(Math.PI / 180 * (angle + 130)) * Math.sin(Math.PI / 180 * 23.4));
       this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 45) * Math.sin(Math.PI / 180 * (angle + 145)), -this.r * Math.sin(Math.PI / 180 * 45) * Math.cos(Math.PI / 180 * 23.4) - this.r * Math.cos(Math.PI / 180 * 45) * Math.cos(Math.PI / 180 * (angle + 145)) * Math.sin(Math.PI / 180 * 23.4));
       
       // 南北アメリカ
       this.ctx.moveTo(this.r * Math.cos(Math.PI / 180 * 70) * Math.sin(Math.PI / 180 * (angle - 170 + 180)), -this.r * Math.sin(Math.PI / 180 * 70) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 70) * Math.cos(Math.PI / 180 * (angle - 170 + 180)) * Math.sin(Math.PI / 180 * 23.4));
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 70) * Math.sin(Math.PI / 180 * (angle - 90 + 180)), -this.r * Math.sin(Math.PI / 180 * 70) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 70) * Math.cos(Math.PI / 180 * (angle - 90 + 180)) * Math.sin(Math.PI / 180 * 23.4));
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 50) * Math.sin(Math.PI / 180 * (angle - 55 + 180)), -this.r * Math.sin(Math.PI / 180 * 50) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 50) * Math.cos(Math.PI / 180 * (angle - 55 + 180)) * Math.sin(Math.PI / 180 * 23.4));
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 30) * Math.sin(Math.PI / 180 * (angle - 90 + 180)), -this.r * Math.sin(Math.PI / 180 * 30) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 30) * Math.cos(Math.PI / 180 * (angle - 90 + 180)) * Math.sin(Math.PI / 180 * 23.4));
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 10) * Math.sin(Math.PI / 180 * (angle - 80 + 180)), -this.r * Math.sin(Math.PI / 180 * 10) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 10) * Math.cos(Math.PI / 180 * (angle - 80 + 180)) * Math.sin(Math.PI / 180 * 23.4));
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 0) * Math.sin(Math.PI / 180 * (angle - 50 + 180)), -this.r * Math.sin(Math.PI / 180 * 0) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 0) * Math.cos(Math.PI / 180 * (angle - 50 + 180)) * Math.sin(Math.PI / 180 * 23.4));
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * -5) * Math.sin(Math.PI / 180 * (angle - 35 + 180)), -this.r * Math.sin(Math.PI / 180 * -5) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * -5) * Math.cos(Math.PI / 180 * (angle - 35 + 180)) * Math.sin(Math.PI / 180 * 23.4));
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * -55) * Math.sin(Math.PI / 180 * (angle - 70 + 180)), -this.r * Math.sin(Math.PI / 180 * -55) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * -55) * Math.cos(Math.PI / 180 * (angle - 70 + 180)) * Math.sin(Math.PI / 180 * 23.4));
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 0) * Math.sin(Math.PI / 180 * (angle - 80 + 180)), -this.r * Math.sin(Math.PI / 180 * 0) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 0) * Math.cos(Math.PI / 180 * (angle - 80 + 180)) * Math.sin(Math.PI / 180 * 23.4));
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 10) * Math.sin(Math.PI / 180 * (angle - 80 + 180)), -this.r * Math.sin(Math.PI / 180 * 10) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 10) * Math.cos(Math.PI / 180 * (angle - 80 + 180)) * Math.sin(Math.PI / 180 * 23.4));
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 35) * Math.sin(Math.PI / 180 * (angle - 120 + 180)), -this.r * Math.sin(Math.PI / 180 * 35) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 35) * Math.cos(Math.PI / 180 * (angle - 120 + 180)) * Math.sin(Math.PI / 180 * 23.4));
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 70) * Math.sin(Math.PI / 180 * (angle - 170 + 180)), -this.r * Math.sin(Math.PI / 180 * 70) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 70) * Math.cos(Math.PI / 180 * (angle - 170 + 180)) * Math.sin(Math.PI / 180 * 23.4));
       
       // ユーラシア・アフリカ
       this.ctx.moveTo(this.r * Math.cos(Math.PI / 180 * 70) * Math.sin(Math.PI / 180 * (angle + 180 + 180)), -this.r * Math.sin(Math.PI / 180 * 70) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 70) * Math.cos(Math.PI / 180 * (angle + 180 + 180)) * Math.sin(Math.PI / 180 * 23.4));
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 60) * Math.sin(Math.PI / 180 * (angle + 140 + 180)), -this.r * Math.sin(Math.PI / 180 * 60) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 60) * Math.cos(Math.PI / 180 * (angle + 140 + 180)) * Math.sin(Math.PI / 180 * 23.4));
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 0) * Math.sin(Math.PI / 180 * (angle + 105 + 180)), -this.r * Math.sin(Math.PI / 180 * 0) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 0) * Math.cos(Math.PI / 180 * (angle + 105 + 180)) * Math.sin(Math.PI / 180 * 23.4));     
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 20) * Math.sin(Math.PI / 180 * (angle + 90 + 180)), -this.r * Math.sin(Math.PI / 180 * 20) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 20) * Math.cos(Math.PI / 180 * (angle + 90 + 180)) * Math.sin(Math.PI / 180 * 23.4));      
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 5) * Math.sin(Math.PI / 180 * (angle + 75 + 180)), -this.r * Math.sin(Math.PI / 180 * 5) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 5) * Math.cos(Math.PI / 180 * (angle + 75 + 180)) * Math.sin(Math.PI / 180 * 23.4));      
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 25) * Math.sin(Math.PI / 180 * (angle + 60 + 180)), -this.r * Math.sin(Math.PI / 180 * 25) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 25) * Math.cos(Math.PI / 180 * (angle + 60 + 180)) * Math.sin(Math.PI / 180 * 23.4));      
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 0) * Math.sin(Math.PI / 180 * (angle + 40 + 180)), -this.r * Math.sin(Math.PI / 180 * 0) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 0) * Math.cos(Math.PI / 180 * (angle + 40 + 180)) * Math.sin(Math.PI / 180 * 23.4));      
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * -45) * Math.sin(Math.PI / 180 * (angle + 20 + 180)), -this.r * Math.sin(Math.PI / 180 * -45) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * -45) * Math.cos(Math.PI / 180 * (angle + 20 + 180)) * Math.sin(Math.PI / 180 * 23.4));      
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * -5) * Math.sin(Math.PI / 180 * (angle + 10 + 180)), -this.r * Math.sin(Math.PI / 180 * -5) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * -5) * Math.cos(Math.PI / 180 * (angle + 10 + 180)) * Math.sin(Math.PI / 180 * 23.4));      
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 0) * Math.sin(Math.PI / 180 * (angle + 10 + 180)), -this.r * Math.sin(Math.PI / 180 * 0) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 0) * Math.cos(Math.PI / 180 * (angle + 10 + 180)) * Math.sin(Math.PI / 180 * 23.4));      
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 20) * Math.sin(Math.PI / 180 * (angle - 20 + 180)), -this.r * Math.sin(Math.PI / 180 * 20) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 20) * Math.cos(Math.PI / 180 * (angle - 20 + 180)) * Math.sin(Math.PI / 180 * 23.4));      
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 35) * Math.sin(Math.PI / 180 * (angle - 10 + 180)), -this.r * Math.sin(Math.PI / 180 * 35) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 35) * Math.cos(Math.PI / 180 * (angle - 10 + 180)) * Math.sin(Math.PI / 180 * 23.4));      
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 30) * Math.sin(Math.PI / 180 * (angle + 30 + 180)), -this.r * Math.sin(Math.PI / 180 * 30) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 30) * Math.cos(Math.PI / 180 * (angle + 30 + 180)) * Math.sin(Math.PI / 180 * 23.4));       
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 35) * Math.sin(Math.PI / 180 * (angle + 35 + 180)), -this.r * Math.sin(Math.PI / 180 * 35) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 35) * Math.cos(Math.PI / 180 * (angle + 35 + 180)) * Math.sin(Math.PI / 180 * 23.4));      
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 35) * Math.sin(Math.PI / 180 * (angle - 10 + 180)), -this.r * Math.sin(Math.PI / 180 * 35) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 35) * Math.cos(Math.PI / 180 * (angle - 10 + 180)) * Math.sin(Math.PI / 180 * 23.4));      
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 55) * Math.sin(Math.PI / 180 * (angle + 10 + 180)), -this.r * Math.sin(Math.PI / 180 * 55) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 55) * Math.cos(Math.PI / 180 * (angle + 10 + 180)) * Math.sin(Math.PI / 180 * 23.4));      
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 60) * Math.sin(Math.PI / 180 * (angle + 5 + 180)), -this.r * Math.sin(Math.PI / 180 * 60) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 60) * Math.cos(Math.PI / 180 * (angle + 5 + 180)) * Math.sin(Math.PI / 180 * 23.4));      
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 70) * Math.sin(Math.PI / 180 * (angle + 25 + 180)), -this.r * Math.sin(Math.PI / 180 * 70) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 70) * Math.cos(Math.PI / 180 * (angle + 25 + 180)) * Math.sin(Math.PI / 180 * 23.4));      
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 75) * Math.sin(Math.PI / 180 * (angle + 100 + 180)), -this.r * Math.sin(Math.PI / 180 * 75) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 75) * Math.cos(Math.PI / 180 * (angle + 100 + 180)) * Math.sin(Math.PI / 180 * 23.4));      
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 70) * Math.sin(Math.PI / 180 * (angle + 180 + 180)), -this.r * Math.sin(Math.PI / 180 * 70) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 70) * Math.cos(Math.PI / 180 * (angle + 180 + 180)) * Math.sin(Math.PI / 180 * 23.4));
 
       // 英国
       this.ctx.moveTo(this.r * Math.cos(Math.PI / 180 * 60) * Math.sin(Math.PI / 180 * (angle - 5 + 180)), -this.r * Math.sin(Math.PI / 180 * 60) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 60) * Math.cos(Math.PI / 180 * (angle - 5 + 180)) * Math.sin(Math.PI / 180 * 23.4));      
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 50) * Math.sin(Math.PI / 180 * (angle + 180)), -this.r * Math.sin(Math.PI / 180 * 50) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 50) * Math.cos(Math.PI / 180 * (angle + 180)) * Math.sin(Math.PI / 180 * 23.4));      
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 50) * Math.sin(Math.PI / 180 * (angle - 10 + 180)), -this.r * Math.sin(Math.PI / 180 * 50) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 50) * Math.cos(Math.PI / 180 * (angle - 10 + 180)) * Math.sin(Math.PI / 180 * 23.4));
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 60) * Math.sin(Math.PI / 180 * (angle - 5 + 180)), -this.r * Math.sin(Math.PI / 180 * 60) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 60) * Math.cos(Math.PI / 180 * (angle - 5 + 180)) * Math.sin(Math.PI / 180 * 23.4));
       
       // オーストラリア
       this.ctx.moveTo(this.r * Math.cos(Math.PI / 180 * -10) * Math.sin(Math.PI / 180 * (angle + 140 + 180)), -this.r * Math.sin(Math.PI / 180 * -10) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * -10) * Math.cos(Math.PI / 180 * (angle + 140 + 180)) * Math.sin(Math.PI / 180 * 23.4));             
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * -25) * Math.sin(Math.PI / 180 * (angle + 150 + 180)), -this.r * Math.sin(Math.PI / 180 * -25) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * -25) * Math.cos(Math.PI / 180 * (angle + 150 + 180)) * Math.sin(Math.PI / 180 * 23.4));            
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * -40) * Math.sin(Math.PI / 180 * (angle + 145 + 180)), -this.r * Math.sin(Math.PI / 180 * -40) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * -40) * Math.cos(Math.PI / 180 * (angle + 145 + 180)) * Math.sin(Math.PI / 180 * 23.4));            
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * -35) * Math.sin(Math.PI / 180 * (angle + 115 + 180)), -this.r * Math.sin(Math.PI / 180 * -35) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * -35) * Math.cos(Math.PI / 180 * (angle + 115 + 180)) * Math.sin(Math.PI / 180 * 23.4));             
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * -20) * Math.sin(Math.PI / 180 * (angle + 115 + 180)), -this.r * Math.sin(Math.PI / 180 * -20) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * -20) * Math.cos(Math.PI / 180 * (angle + 115 + 180)) * Math.sin(Math.PI / 180 * 23.4));      
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * -10) * Math.sin(Math.PI / 180 * (angle + 140 + 180)), -this.r * Math.sin(Math.PI / 180 * -10) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * -10) * Math.cos(Math.PI / 180 * (angle + 140 + 180)) * Math.sin(Math.PI / 180 * 23.4));      
       
       // 南極
       this.ctx.moveTo(this.r * Math.cos(Math.PI / 180 * -80) * Math.sin(Math.PI / 180 * (angle - 40 + 180)), -this.r * Math.sin(Math.PI / 180 * -80) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * -80) * Math.cos(Math.PI / 180 * (angle - 40 + 180)) * Math.sin(Math.PI / 180 * 23.4));             
       
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * -60) * Math.sin(Math.PI / 180 * (angle - 60 + 180)), -this.r * Math.sin(Math.PI / 180 * -60) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * -60) * Math.cos(Math.PI / 180 * (angle - 60 + 180)) * Math.sin(Math.PI / 180 * 23.4));            
       
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * -75) * Math.sin(Math.PI / 180 * (angle - 160 + 180)), -this.r * Math.sin(Math.PI / 180 * -75) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * -75) * Math.cos(Math.PI / 180 * (angle - 160 + 180)) * Math.sin(Math.PI / 180 * 23.4));            
       
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * -65) * Math.sin(Math.PI / 180 * (angle + 140 + 180)), -this.r * Math.sin(Math.PI / 180 * -65) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * -65) * Math.cos(Math.PI / 180 * (angle + 140 + 180)) * Math.sin(Math.PI / 180 * 23.4));            
       
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * -65) * Math.sin(Math.PI / 180 * (angle + 100 + 180)), -this.r * Math.sin(Math.PI / 180 * -65) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * -65) * Math.cos(Math.PI / 180 * (angle + 100 + 180)) * Math.sin(Math.PI / 180 * 23.4));            
       
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * -65) * Math.sin(Math.PI / 180 * (angle + 60 + 180)), -this.r * Math.sin(Math.PI / 180 * -65) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * -65) * Math.cos(Math.PI / 180 * (angle + 60 + 180)) * Math.sin(Math.PI / 180 * 23.4));            
       
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * -70) * Math.sin(Math.PI / 180 * (angle + 0 + 180)), -this.r * Math.sin(Math.PI / 180 * -70) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * -70) * Math.cos(Math.PI / 180 * (angle + 0 + 180)) * Math.sin(Math.PI / 180 * 23.4));            
       
       this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * -80) * Math.sin(Math.PI / 180 * (angle - 40 + 180)), -this.r * Math.sin(Math.PI / 180 * -80) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * -80) * Math.cos(Math.PI / 180 * (angle - 40 + 180)) * Math.sin(Math.PI / 180 * 23.4));             

      //  this.ctx.fill();

       this.ctx.stroke();
       this.ctx.restore();
    
  }
}

class Globe {
  constructor(drawer) {
    this.drawer = drawer;
    this.angle = 0;
  }

  draw() {
    this.drawer.draw(this.angle);
  }

    clear() {
      this.ctx.clearRect(0, 0, this.width, this.height); 
    }

    update() {
      this.angle += 1;
    }

    run() {
      this.update();
      this.draw();

      setTimeout(() => {
        this.run();
      }, 100);

    }
  }

  const canvas = document.querySelector('#SummerGlobe');
  if (typeof canvas.getContext === 'undefined') {
    return;
  }

  const globe = new Globe(new GlobeDrawer(canvas));
  globe.run();
})();
