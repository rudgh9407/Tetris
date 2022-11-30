class Tetris_game {
  constructor(){      //--- Tetris Constructor ---//
    this.save_arr;
    this.save_num;
    this.total_key = 0;
    this.stack_key = [];
    this.move_key = 0;
    this.check_code = 0;
    this.time_key = 0;
    this.shape_arr_1 = [ [1,1], [1,1] ];
    this.shape_arr_2 = [ [2,2,2,2] ];
    this.shape_arr_3 = [ [3,0,0], [3,3,3] ];
    this.shape_arr_4 = [ [0,0,4], [4,4,4] ];
    this.shape_arr_5 = [ [5,5,0], [0,5,5] ];
    this.shape_arr_6 = [ [0,6,6], [6,6,0] ];
    this.shape_arr_7 = [ [0,7,0], [7,7,7] ];
    this.background_arr = [];
    this.check_arr = [];
    this.start_key = 0;
    this.check_down;
    this.clear_game;
    this.clear_key = 0;
    this.bottom_key = 0;
    this.end_motion = [
      {opacity: '1', fontSize: '10rem'},
      {opacity: '1', fontSize: '10rem'},
      {opacity: '1', fontSize: '10rem'},
      {opacity: '0', fontSize: "3rem"} 
    ];
    this.end_time_1 = { delay: 0, duration: 3000, iterations: 1 };
    this.end_time_2 = { delay: 200, duration: 2800, iterations: 1 };
    this.end_time_3 = { delay: 400, duration: 2600, iterations: 1 };
    this.end_time_4 = { delay: 600, duration: 2400, iterations: 1 };
    this.end_time_5 = { delay: 800, duration: 2200, iterations: 1 };
    this.end_time_6 = { delay: 1000, duration: 2000, iterations: 1 };
    this.end_time_7 = { delay: 1200, duration: 1800, iterations: 1 };
    this.end_time_8 = { delay: 1400, duration: 1600, iterations: 1 };
    this.preview_value = 0;
    this.preview_arr = [];
    this.first_key = 0;
    this.edge_ani_1 = [ {background: `rgba(255,255,0,1)`}, {background: `rgb(21,63,102)`} ];
    this.edge_ani_2 = [ {background: `rgba(255,150,0,1)`}, {background: `rgb(21,63,102)`} ];
    this.edge_ani_3 = [ {background: `rgba(255,0,200,1)`}, {background: `rgb(21,63,102)`} ];
    this.edge_ani_4 = [ {background: `rgba(255,0,0,1)`}, {background: `rgb(21,63,102)`} ];
    this.edge_time = { duration: 500, iterations: 1 };
    this.current_level = 0;
    this.bonus_key = [];
    this.random_box = 0;
    this.save_key = 0;
    this.pause_arr = [];
    this.pause_move = 0;
  }
  get repair_game(){      //--- Getter ---//
    return this.start_key;
  }
  set repair_game([key_1, key_2, key_3, key_4]){      //--- Setter ---//
    this.move_key += key_1;
    this.time_key += key_2;
    this.check_code = key_3;
    this.start_key = key_4;
  }
  create_map = () => {      //--- First Create Game Map ---//
    for(let i=0; i<20; i++){
      this.background_arr.push([]);
      this.check_arr.push([]);
      this.pause_arr.push([]);
      $(`.background_view`).append(`<article></article>`);
      for(let j=0; j<10; j++){
        this.background_arr[i].push(0);
        this.check_arr[i].push(0);
        this.pause_arr[i].push(0);
        $(`.background_view>article:last-child`).append(`<div>0</div>`);
      }
    }
  } 
  start_game = () => {      //--- Call Start Game ---//
    this.move_key = 0;
    this.time_key = 0;
    if(this.first_key == 0){
      this.preview_value = Math.floor(Math.random()*(7-1+1)+1);
      this.first_key++;
    }
    if(this.start_key == 2){
      this.move_key = this.pause_move;
      this.total_down();
    } else {
      switch(this.preview_value){
        case 1:
          this.save_arr = this.shape_arr_1;
          this.save_num = 1;
            this.preview_value = Math.floor(Math.random()*(7-1+1)+1);
            this.preview_game();
          this.total_down();
          break;
        case 2:
          this.save_arr = this.shape_arr_2;
          this.save_num = 2;
            this.preview_value = Math.floor(Math.random()*(7-1+1)+1);
            this.preview_game();
          this.total_down();
          break;
        case 3:
          this.save_arr = this.shape_arr_3;
          this.save_num = 3;
            this.preview_value = Math.floor(Math.random()*(7-1+1)+1);
            this.preview_game();
          this.total_down();
          break;
        case 4:
          this.save_arr = this.shape_arr_4;
          this.save_num = 4;
            this.preview_value = Math.floor(Math.random()*(7-1+1)+1);
            this.preview_game();
          this.total_down();
          break;
        case 5:
          this.save_arr = this.shape_arr_5;
          this.save_num = 5;
            this.preview_value = Math.floor(Math.random()*(7-1+1)+1);
            this.preview_game();
          this.total_down();
          break;
        case 6:
          this.save_arr = this.shape_arr_6;
          this.save_num = 6;
            this.preview_value = Math.floor(Math.random()*(7-1+1)+1);
            this.preview_game();
          this.total_down();
          break;
        case 7:
          this.save_arr = this.shape_arr_7;
          this.save_num = 7;
            this.preview_value = Math.floor(Math.random()*(7-1+1)+1);
            this.preview_game();
          this.total_down();
          break;
      }
    }
  }
  preview_game = () => {      //--- Preview Next Block ---//
    switch(this.preview_value){
      case 1:
        this.preview_arr = this.shape_arr_1;
        break;
      case 2:
        this.preview_arr = this.shape_arr_2;
        break;
      case 3:
        this.preview_arr = this.shape_arr_3;
        break;
      case 4:
        this.preview_arr = this.shape_arr_4;
        break;
      case 5:
        this.preview_arr = this.shape_arr_5;
        break;
      case 6:
        this.preview_arr = this.shape_arr_6;
        break;
      case 7:
        this.preview_arr = this.shape_arr_7;
        break;
    }
    for(let k=0; k<2; k++){
      for(let g=0; g<4; g++){
        $(`.preview_box>article:nth-child(${k+2})>div:nth-child(${g+1})`).html(0);
        $(`.preview_box>article:nth-child(${k+2})>div:nth-child(${g+1})`).css({background: `transparent`, boxShadow: `inset 0 0 0.1vw #333, inset 0.2vw 0.2vw 0 #FFF, inset 0 -0.2vw 0 rgba(0,0,0,0.2)`});
      }
    }
    for(let i=0; i<this.preview_arr.length; i++){
      for(let j=0; j<this.preview_arr[i].length; j++){
        if(this.preview_arr[i][j] != 0){
          $(`.preview_box>article:nth-child(${i+2})>div:nth-child(${j+1+(4-this.preview_arr[i].length)})`).html(this.preview_arr[i][j]);
        }
        let current_value = $(`.preview_box>article:nth-child(${i+2})>div:nth-child(${j+1+(4-this.preview_arr[i].length)})`).html();
        if( current_value == 1 ){
          $(`.preview_box>article:nth-child(${i+2})>div:nth-child(${j+1+(4-this.preview_arr[i].length)})`).css({background: `#F7C931`, boxShadow: `inset 0.2rem 0.2rem 0 rgba(255, 255, 255, 0.7), inset 0 -0.2rem 0 rgba(0,0,0,0.4)`});
        } else if( current_value == 2 ){
          $(`.preview_box>article:nth-child(${i+2})>div:nth-child(${j+1+(4-this.preview_arr[i].length)})`).css({background: `#1084FF`, boxShadow: `inset 0.2rem 0.2rem 0 rgba(255, 255, 255, 0.7), inset 0 -0.2rem 0 rgba(0,0,0,0.4)`});
        } else if( current_value == 3 ){
          $(`.preview_box>article:nth-child(${i+2})>div:nth-child(${j+1+(4-this.preview_arr[i].length)})`).css({background: `#FE9911`, boxShadow: `inset 0.2rem 0.2rem 0 rgba(255, 255, 255, 0.7), inset 0 -0.2rem 0 rgba(0,0,0,0.4)`});
        } else if( current_value == 4 ){
          $(`.preview_box>article:nth-child(${i+2})>div:nth-child(${j+1+(4-this.preview_arr[i].length)})`).css({background: `#E72F67`, boxShadow: `inset 0.2rem 0.2rem 0 rgba(255, 255, 255, 0.7), inset 0 -0.2rem 0 rgba(0,0,0,0.4)`});
        } else if( current_value == 5 ){
          $(`.preview_box>article:nth-child(${i+2})>div:nth-child(${j+1+(4-this.preview_arr[i].length)})`).css({background: `#FE3C27`, boxShadow: `inset 0.2rem 0.2rem 0 rgba(255, 255, 255, 0.7), inset 0 -0.2rem 0 rgba(0,0,0,0.4)`});
        } else if( current_value == 6 ){
          $(`.preview_box>article:nth-child(${i+2})>div:nth-child(${j+1+(4-this.preview_arr[i].length)})`).css({background: `#50BC56`, boxShadow: `inset 0.2rem 0.2rem 0 rgba(255, 255, 255, 0.7), inset 0 -0.2rem 0 rgba(0,0,0,0.4)`});
        } else if( current_value == 7 ){
          $(`.preview_box>article:nth-child(${i+2})>div:nth-child(${j+1+(4-this.preview_arr[i].length)})`).css({background: `#9828AA`, boxShadow: `inset 0.2rem 0.2rem 0 rgba(255, 255, 255, 0.7), inset 0 -0.2rem 0 rgba(0,0,0,0.4)`});
        } else {
          $(`.preview_box>article:nth-child(${i+2})>div:nth-child(${j+1+(4-this.preview_arr[i].length)})`).css({background: `transparent`, boxShadow: `inset 0 0 0.1vw #333, inset 0.2vw 0.2vw 0 #FFF, inset 0 -0.2vw 0 rgba(0,0,0,0.2)`});
        }
      }
    }
  }
  change_color = () => {      //--- Reading Value & Change Color ---//
    let back_view = document.querySelector(`.background_view`);
    this.bonus_key = [];
    for(let i=0; i<20; i++){
      this.stack_key = [];
      for(let j=0; j<10; j++){
          $(`.background_view>article:nth-child(${i+1})>div:nth-child(${j+1})`).html(`${this.background_arr[i][j]}`);
        let current_value = $(`.background_view>article:nth-child(${i+1})>div:nth-child(${j+1})`).html();
        if( current_value == 8 || this.check_arr[i][j] == 8 ){
          $(`.background_view>article:nth-child(${i+1})>div:nth-child(${j+1})`).css({background: `gray`, boxShadow: `inset 0.2rem 0.2rem 0 rgba(255, 255, 255, 0.7), inset 0 -0.2rem 0 rgba(0,0,0,0.4)`});
        } else if( current_value == 1 || this.check_arr[i][j] == 1 ){
          $(`.background_view>article:nth-child(${i+1})>div:nth-child(${j+1})`).css({background: `#F7C931`, boxShadow: `inset 0.2rem 0.2rem 0 rgba(255, 255, 255, 0.7), inset 0 -0.2rem 0 rgba(0,0,0,0.4)`});
        } else if( current_value == 2 || this.check_arr[i][j] == 2 ){
          $(`.background_view>article:nth-child(${i+1})>div:nth-child(${j+1})`).css({background: `#1084FF`, boxShadow: `inset 0.2rem 0.2rem 0 rgba(255, 255, 255, 0.7), inset 0 -0.2rem 0 rgba(0,0,0,0.4)`});
        } else if( current_value == 3 || this.check_arr[i][j] == 3 ){
          $(`.background_view>article:nth-child(${i+1})>div:nth-child(${j+1})`).css({background: `#FE9911`, boxShadow: `inset 0.2rem 0.2rem 0 rgba(255, 255, 255, 0.7), inset 0 -0.2rem 0 rgba(0,0,0,0.4)`});
        } else if( current_value == 4 || this.check_arr[i][j] == 4 ){
          $(`.background_view>article:nth-child(${i+1})>div:nth-child(${j+1})`).css({background: `#E72F67`, boxShadow: `inset 0.2rem 0.2rem 0 rgba(255, 255, 255, 0.7), inset 0 -0.2rem 0 rgba(0,0,0,0.4)`});
        } else if( current_value == 5 || this.check_arr[i][j] == 5 ){
          $(`.background_view>article:nth-child(${i+1})>div:nth-child(${j+1})`).css({background: `#FE3C27`, boxShadow: `inset 0.2rem 0.2rem 0 rgba(255, 255, 255, 0.7), inset 0 -0.2rem 0 rgba(0,0,0,0.4)`});
        } else if( current_value == 6 || this.check_arr[i][j] == 6 ){
          $(`.background_view>article:nth-child(${i+1})>div:nth-child(${j+1})`).css({background: `#50BC56`, boxShadow: `inset 0.2rem 0.2rem 0 rgba(255, 255, 255, 0.7), inset 0 -0.2rem 0 rgba(0,0,0,0.4)`});
        } else if( current_value == 7 || this.check_arr[i][j] == 7 ){
          $(`.background_view>article:nth-child(${i+1})>div:nth-child(${j+1})`).css({background: `#9828AA`, boxShadow: `inset 0.2rem 0.2rem 0 rgba(255, 255, 255, 0.7), inset 0 -0.2rem 0 rgba(0,0,0,0.4)`});
        } else {
          $(`.background_view>article:nth-child(${i+1})>div:nth-child(${j+1})`).css({background: `transparent`, boxShadow: `inset 0 0 0.1vw #333, inset 0.2vw 0.2vw 0 #FFF, inset 0 -0.2vw 0 rgba(0,0,0,0.2)`});
        }
        if(this.check_arr[i][j] != 0){    // 가로줄 채워질시 삭제 부분
          this.stack_key.push(i);
          if(this.stack_key.length == 10){
            this.bonus_key.unshift(i);
          }
        }
      }
    }
    if(this.bonus_key.length == 1){
      gsap.fromTo(back_view, 
        { boxShadow: '0 0 1.5vw rgba(255,220,0,0.7)' },
        { duration: 0.4, ease: "Power4.easeOut", boxShadow: '0 0 0.6vw rgba(0,0,0,0.7)' }
      )
      for(let w=0; w<this.bonus_key.length; w++){
        $(`.score_number`).val(Number($(`.score_number`).val()) + 10);
        let level_count = Math.floor(Number($(`.score_number`).val()) / 100);
        this.current_level = level_count;
        $(`.level_box>p>span`).html(level_count)
        for(let k=this.bonus_key[0]; k>0; k--){
          for(let g=0; g<10; g++){
            this.check_arr[k][g] = this.check_arr[k-1][g];
          }
        }
      }
    } else if(this.bonus_key.length == 2){
      gsap.fromTo(back_view, 
        { boxShadow: '0 0 1.5vw rgba(0,255,130,0.7)' },
        { duration: 0.5, ease: "Power4.easeOut", boxShadow: '0 0 0.6vw rgba(0,0,0,0.7)' }
      )
      for(let w=0; w<this.bonus_key.length; w++){
        $(`.score_number`).val(Number($(`.score_number`).val()) + 12);
        let level_count = Math.floor(Number($(`.score_number`).val()) / 100);
        this.current_level = level_count;
        $(`.level_box>p>span`).html(level_count)
        for(let k=this.bonus_key[0]; k>0; k--){
          for(let g=0; g<10; g++){
            this.check_arr[k][g] = this.check_arr[k-1][g];
          }
        }
      }
    } else if(this.bonus_key.length == 3){
      gsap.fromTo(back_view, 
        { boxShadow: '0 0 1.5vw rgba(0,100,255,0.7)' },
        { duration: 0.4, ease: "Power4.easeOut", boxShadow: '0 0 0.6vw rgba(0,0,0,0.7)' }
      )
      for(let w=0; w<this.bonus_key.length; w++){
        $(`.score_number`).val(Number($(`.score_number`).val()) + 15);
        let level_count = Math.floor(Number($(`.score_number`).val()) / 100);
        this.current_level = level_count;
        $(`.level_box>p>span`).html(level_count);
        for(let k=this.bonus_key[0]; k>0; k--){
          for(let g=0; g<10; g++){
            this.check_arr[k][g] = this.check_arr[k-1][g];
          }
        }
      }
    } else if(this.bonus_key.length == 4){
      gsap.fromTo(back_view, 
        { boxShadow: '0 0 1.5vw rgba(190,0,255,0.7)' },
        { duration: 0.4, ease: "Power4.easeOut", boxShadow: '0 0 0.6vw rgba(0,0,0,0.7)' }
      )
      for(let w=0; w<this.bonus_key.length; w++){
        $(`.score_number`).val(Number($(`.score_number`).val()) + 20);
        let level_count = Math.floor(Number($(`.score_number`).val()) / 100);
        this.current_level = level_count;
        $(`.level_box>p>span`).html(level_count);
        for(let k=this.bonus_key[0]; k>0; k--){
          for(let g=0; g<10; g++){
            this.check_arr[k][g] = this.check_arr[k-1][g];
          }
        }
      }
    }
    if(Math.floor(this.current_level/5)-1 == this.random_box){  // 5레벨 마다 랜덤 블록 생성
      this.random_box++;
      let get_pos_x = [];
      let get_pos_y = [];
      let get_check = [];
      for(let z=0; z<10; z++){
        for(let x=0; x<20; x++){
          if(x<5 && this.check_arr[x][z] != 0){
            continue;
          }else if(this.check_arr[x][z] != 0){
            get_pos_x.push(x);
            get_pos_y.push(z);
            x = 20;
          }else if(x == 19){
            get_pos_x.push(20);
            get_pos_y.push(z);
          }
        }
      }
      for(let v=0; v<(this.random_box*3); v++){
        let random_create = Math.floor(Math.random()*(9-0+1)+0);
        let y_create = random_create;
        if(get_check[get_check.length-1] == random_create){
          get_check.push(random_create-1);
        } else {
          get_check.push(random_create);
        }
        this.check_arr[get_pos_x[get_check[get_check.length-1]]-1-Math.floor((v+1)/10)][get_pos_y[y_create]] = 8;
      }
    }
    requestAnimationFrame(this.change_color);
  }
  total_down = () => {      //--- Move Down & Check Condition ---//
    this.check_down = requestAnimationFrame(this.total_down);
    this.clear_key++;
    if(this.clear_key > 51){    // 블록이 위에 까지 다 찾을때 에러 발생 및 초기화
      for(let i=0; i<this.save_arr[this.save_arr.length-1].length; i++){
        if(this.check_arr[0][i+3] != 0){
          setTimeout(()=>{
            $(`.end_btn`).trigger('click');
            $(`.end_btn`).click();
            $(`.input_id`).val('');
            $(`.score_number`).val('0');
            $(`.level_box>p>span`).html(0);
          },3000);
          cancelAnimationFrame(this.check_down);
          cancelAnimationFrame(this.clear_game);
          this.preview_value = 0;
          this.preview_game();
          this.start_key = 0;
          for(let i=0; i<20; i++){
            for(let j=0; j<10; j++){
              this.check_arr[i][j] = 0;
              this.background_arr[i][j] = 0;
            }
          }
          $(`.fail_box span:nth-child(1)`)[0].animate(this.end_motion, this.end_time_1);
          $(`.fail_box span:nth-child(2)`)[0].animate(this.end_motion, this.end_time_2);
          $(`.fail_box span:nth-child(3)`)[0].animate(this.end_motion, this.end_time_3);
          $(`.fail_box span:nth-child(4)`)[0].animate(this.end_motion, this.end_time_4);
          $(`.fail_box span:nth-child(5)`)[0].animate(this.end_motion, this.end_time_5);
          $(`.fail_box span:nth-child(6)`)[0].animate(this.end_motion, this.end_time_6);
          $(`.fail_box span:nth-child(7)`)[0].animate(this.end_motion, this.end_time_7);
          $(`.fail_box span:nth-child(8)`)[0].animate(this.end_motion, this.end_time_8);
        } else {
          this.clear_key = 0;
        }
      }
    } else {
      let condition_key = 0;
      let down_check = 0;
      let left_check = 0;
      let right_check = 0;
      if(this.bottom_key == 2){   // quick down 마지막 조정용도
        this.bottom_key = 0;
        this.time_key = 100;
      }
      if(this.bottom_key == 1){   // quick down 마지막 조정용도
        this.bottom_key = 2;
        this.time_key = 100;
      }
      if( this.check_code == 5 ){   // space bar click
        root_2: for(let i=this.total_key; i<this.check_arr.length; i++){
          let middle_check = 0;
          for(let f=0; f<this.save_arr.length; f++){
            for(let h=0; h<this.save_arr[f].length; h++){
              // if(this.check_arr[i][h+3+this.move_key] == 0 && f==(this.save_arr.length-1)){
              if(this.check_arr[this.total_key+f/*+1*/][h+3+this.move_key] == 0 && this.save_arr[f][h] != 0){  
                middle_check++;
              }
              if(this.check_arr[i][h+3+this.move_key] != 0 && f==(this.save_arr.length-1)){
                break root_2;
              }
            }
          }
          if(middle_check > 0/* == (this.save_arr[0].length*this.save_arr.length)*/){ 
            down_check++; 
          }
        }
        if(down_check > 0){
          this.total_key += down_check-this.save_arr.length;
          this.time_key = 100;
          this.bottom_key = 1;
        }
        down_check = 0;
        this.check_code = 0;
      }
      for(let k=0; k<this.save_arr.length; k++){    // 중첩 확인여부 반복문
        for(let g=0; g<this.save_arr[k].length; g++){
          if(this.move_key < -2){this.move_key = -3}
          if( (g+3+this.move_key) > 8){this.move_key = (9-this.save_arr[k].length-2)}
          if(this.check_code == 3){// 왼쪽 화살표 충돌 방지
            for(let f=0; f<this.save_arr.length; f++){
              for(let h=0; h<this.save_arr[f].length; h++){
                if(this.check_arr[this.total_key+f][h+3+this.move_key] != 0 && this.save_arr[f][h] != 0){
                  left_check++;
                }
              }
            }
            if(left_check > 0){
              this.move_key++;
            } else if(this.check_arr[this.total_key+k][g+3+this.move_key] != 0 && this.save_arr[k][g] != 0){
              condition_key++;
            }
            this.check_code = 0;
          } else if(this.check_code == 4){// 오른쪽 화살지 충돌 방지
            for(let f=0; f<this.save_arr.length; f++){
              for(let h=0; h<this.save_arr[f].length; h++){
                if(this.check_arr[this.total_key+f][h+3+this.move_key] != 0 && this.save_arr[f][this.save_arr[f].length-1] != 0){
                  right_check++;
                }
              }
            }
            if(right_check > 0){
              this.move_key--;
            } else if(this.check_arr[this.total_key+k][g+3+this.move_key] != 0 && this.save_arr[k][g] != 0){
              condition_key++;
            }
            this.check_code = 0;
          } else if(this.check_arr[this.total_key+k][g+3+this.move_key] != 0 && this.save_arr[k][g] != 0){  
            condition_key++;
          }
        }
      }
      if(condition_key > 0){    // 중첩시 블럭 쌓기 위한 끊는 부분
        this.total_key = 0;
        for(let i=0; i<this.background_arr.length; i++){    // 배열값 저장
          for(let j=0; j<this.background_arr[i].length; j++){
            if(this.check_arr[i][j] == 0){
              this.check_arr[i][j] = this.background_arr[i][j];
            }
          }
        }
        // this.clear_game = setTimeout(() => {this.start_game();}, 0); 
        // clearTimeout(this.check_down);
        this.clear_game = requestAnimationFrame(this.start_game);
        cancelAnimationFrame(this.check_down);
      } else {    // 미중첩시 해당 배열에 값 전달 부분
        for(let i=0; i<this.background_arr.length; i++){
          for(let j=0; j<this.background_arr[i].length; j++){
            if(this.check_arr[i][j] == 0){
              this.background_arr[i][j] = 0;
              for(let k=0; k<this.save_arr.length; k++){
                for(let g=0; g<this.save_arr[k].length; g++){
                  if(this.save_arr[k][g] != 0){
                    this.background_arr[this.total_key+k][g+3+this.move_key] = this.save_num;
                  }
                }
              }
            }
          }
        }
        this.time_key++;    // 속도 관련 부분
        if(this.current_level <= 20){
          if(this.time_key >= (60 - (this.current_level*2.4) ) ){
            this.total_key++;
            this.time_key = 0;
          }
        } else {
          if(this.time_key >= 11){
            this.total_key++;
            this.time_key = 0;
          }
        }
        if(this.total_key > (this.background_arr.length-this.save_arr.length)){   // 중첩 없이 바닥에 닿아 끊기는 부분
          this.total_key = 0;
          for(let i=0; i<this.background_arr.length; i++){    // 배열값 저장
            for(let j=0; j<this.background_arr[i].length; j++){
              if(this.check_arr[i][j] == 0){
                this.check_arr[i][j] = this.background_arr[i][j];
              }
            }
          }
          // this.clear_game = setTimeout(() => {this.start_game();}, 0); 
          // clearTimeout(this.check_down); 
          this.clear_game = requestAnimationFrame(this.start_game);
          cancelAnimationFrame(this.check_down);
        }
      }
    }
    this.check_code = 0;
  }
  rotate_shape = () => {      //--- Rotate Block CW ---//
    let check_rotate = 0;
    let arr_sample = [];
    for(let i=0; i<this.save_arr.length; i++) {
      for(let j=0; j<this.save_arr[i].length; j++){
        if(i==0){arr_sample.push([]);}
        arr_sample[j].unshift(this.save_arr[i][j]);
      }
    }
    for(let i=0; i<arr_sample.length; i++) {
      for(let j=0; j<arr_sample[i].length; j++){
        if(this.check_arr[this.total_key+i][j+3+this.move_key] != 0 || this.total_key > (20-arr_sample.length)){
          check_rotate++;
        }
      }
    }
    if(check_rotate == 0){
      this.save_arr = arr_sample;
    } else {
      this.save_arr = this.save_arr;
    }
  }
  pause_game = () => {      //--- Pause Game ---//
    // clearTimeout(this.check_down);
    cancelAnimationFrame(this.check_down)
    this.start_key = 2;
    this.save_key = 1;
    this.pause_move = this.move_key;
  }
}

let Control_game = new Tetris_game();
Control_game.create_map();
Control_game.change_color();
$(`body`).css('pointer-events', 'none');
$(`.login_box`).css('pointer-events', 'all');
$(`.start_btn`).on('click', function(){      //--- Start Button Event ---//
  if(Control_game.repair_game == 0){
    Control_game.start_game();
    Control_game.repair_game = [0, 0, 0, 1];
    $(`.loading_view`).css({display: `none`});
  }
  if(Control_game.repair_game == 2){
    Control_game.start_game();
    Control_game.repair_game = [0, 0, 0, 1];
    $(`.pause_box`).css({opacity: `0`});
  }
});
$(`.login_btn`).on('click', function(){      //--- Login Button Event ---//
  $(`.login_box`).css({opacity: `0`});
  $(`.current_id`).val($(`.input_id`).val());
  $(`body`).css('pointer-events', 'all');
})
$(`.pause_btn`).on('click', function(){      //--- Pause Button Event ---//
  if(Control_game.repair_game == 1){
    Control_game.pause_game();
    $(`.pause_box`).css({opacity: `1`});
  }
});

$(window).on('keydown keyup click', function(e){      //--- Control Arrow Key Event ---//
  const background_ani = [ {background: 'white'}, {background: 'rgb(21,63,102)'} ];
  const text_ani = [ {color: 'rgb(21,63,102)'}, {color: 'white'} ];
  const click_time = { duration: 200, iterations: 1 };
  if(Control_game.repair_game == 1){
    if(e.type == 'keydown'){
      if(e.keyCode == 38){
        $(`.click_up`).css({background: `white`});
        $(`.click_up i`).css({color: `rgb(21, 63, 102)`});
        Control_game.rotate_shape();
      }// 위쪽 화살표
      if(e.keyCode == 37){
        Control_game.repair_game = [-1, 0 , 3, 1];
        $(`.click_left`).css({background: `white`});
        $(`.click_left i`).css({color: `rgb(21, 63, 102)`});
      }// 왼쪽 화살표
      if(e.keyCode == 39){
        Control_game.repair_game = [1, 0, 4, 1];
        $(`.click_right`).css({background: `white`});
        $(`.click_right i`).css({color: `rgb(21, 63, 102)`});
      }// 오른쪽 화살표
      if(e.keyCode == 40){
        Control_game.repair_game = [0, 50, 0, 1];
        $(`.click_down`).css({background: `white`});
        $(`.click_down i`).css({color: `rgb(21, 63, 102)`});
      }// 아래쪽 화살표
      if(e.keyCode == 32){
        Control_game.repair_game = [0, 0, 5, 1];
        $(`.click_space`).css({background: `white`});
        $(`.click_space i`).css({color: `rgb(21, 63, 102)`});
      }// spacebar
    }
    if(e.type == 'keyup') {
      $(`.control_box div[class^=click]`).css({background: `#F65`});
      $(`.control_box i`).css({color: `white`});
    }
    if(e.type == 'click'){
      switch(e.target){
        case $(`.click_up`)[0] :
          $(`.click_up`)[0].animate(background_ani, click_time);
          $(`.click_up i`)[0].animate(text_ani, click_time);
          if(Control_game.repair_game == 1){
            Control_game.rotate_shape();
          }
          break;
        case $(`.click_left`)[0] :
          $(`.click_left`)[0].animate(background_ani, click_time);
          $(`.click_left i`)[0].animate(text_ani, click_time);
          Control_game.repair_game = [-1, 0 , 3, 1];
          break;
        case $(`.click_right`)[0] :
          $(`.click_right`)[0].animate(background_ani, click_time);
          $(`.click_right i`)[0].animate(text_ani, click_time);
          Control_game.repair_game = [1, 0, 4, 1];
          break;
        case $(`.click_down`)[0] :
          $(`.click_down`)[0].animate(background_ani, click_time);
          $(`.click_down i`)[0].animate(text_ani, click_time);
          Control_game.repair_game = [0, 50, 0, 1];
          break;
        case $(`.click_space`)[0] :
          Control_game.repair_game = [0, 0, 5, 1];
          $(`.click_space`)[0].animate(background_ani, click_time);
          $(`.click_space i`)[0].animate(text_ani, click_time);
          break;
        case $(`.click_up i`)[0] :
          $(`.click_up`)[0].animate(background_ani, click_time);
          $(`.click_up i`)[0].animate(text_ani, click_time);
          if(Control_game.repair_game == 1){
            Control_game.rotate_shape();
          }
          break;
        case $(`.click_left i`)[0] :
          $(`.click_left`)[0].animate(background_ani, click_time);
          $(`.click_left i`)[0].animate(text_ani, click_time);
          Control_game.repair_game = [-1, 0 , 3, 1];
          break;
        case $(`.click_right i`)[0] :
          $(`.click_right`)[0].animate(background_ani, click_time);
          $(`.click_right i`)[0].animate(text_ani, click_time);
          Control_game.repair_game = [1, 0, 4, 1];
          break;
        case $(`.click_down i`)[0] :
          $(`.click_down`)[0].animate(background_ani, click_time);
          $(`.click_down i`)[0].animate(text_ani, click_time);
          Control_game.repair_game = [0, 50, 0, 1];
          break;
        case $(`.click_space i`)[0] :
          Control_game.repair_game = [0, 0, 5, 1];
          $(`.click_space`)[0].animate(background_ani, click_time);
          $(`.click_space i`)[0].animate(text_ani, click_time);
          break;
      }
    }
  }
});

$(function(){     //--- 우클릭 방지 ---//
	if (window.addEventListener) {
		window.addEventListener('contextmenu', function(e) { try { if (typeof e != 'undefined') { e.preventDefault(); return false; } else { return false; }} catch(e) {} } , false);
	} else {
		window.attachEvent('oncontextmenu', function(e) { try { if (typeof e != 'undefined') { e.preventDefault(); return false; } else { return false; }} catch(e) {} } );
	}
	var handlemouseEvent = function(e) {
		try {
			if (typeof e == 'undefined') {
				if (window.event.button && window.event.button == "2") {
					return false;
				}
			} else if ((e.which && e.which == 3) || (e.button && e.button == 2)) {
				e.preventDefault();
				return false;
			} else if (e.keyCode == 123) { //F12방지
				e.preventDefault();
				return false;
			}
		} catch (e) {}
	};
	window.onkeydown = handlemouseEvent;
	window.onkeyup = handlemouseEvent; 
});


