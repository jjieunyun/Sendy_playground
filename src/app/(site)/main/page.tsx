"use client";

import React, {useState} from 'react';
import {useRouter} from "next/navigation"; // next/router에서 가져오기
import Image from "next/image";
// 이미지 소스들을 가져오는 부분
import room from '@image/main/my-room.svg';
import game from '@image/main/game.svg';
import table from '@image/main/table.svg';
import notice from '@image/main/notice.svg';
import cake from '@image/main/cake.svg';
import hoverGame from '@image/main/hover_game.svg';
import hoverTable from '@image/main/hover_table.svg';
import hoverNotice from '@image/main/hover_notice.svg';
import hoverCake from '@image/main/hover_cake.svg';
import useToast from "@hooks/useToast";
import ToastPopup from "@components/common/ToastPopup";
import ToastMessage from "@components/common/ToastMessage";

const Main = () => {
    const [hoveredItem, setHoveredItem] = useState('');
    const router = useRouter();
    const {isToastVisible, message, showToast, hideToast} = useToast()

    const handleTableItem = () => {
        router.push('/random-lunch')
    }

    const handleGameItem = () => {
        showToast({msg: <ToastMessage message={'경품추첨...준비 중입니다...커밍쑨....!!'}/>})
    }

    const handleNoticeItem = () => {
        showToast({msg: <ToastMessage message={'최상의 맛집을 찾고있는 중 입니다... 커밍쑨....!!'}/>})
    }

    const handleCakeItem = () => {
        showToast({msg: <ToastMessage message={'Happy...birth..day...to........you....Sorry😅 커밍쑨....!!'}/>})
    }

    const handleMouseEnter = (itemName: string) => {
        setHoveredItem(itemName);
    };

    const handleMouseLeave = () => {
        setHoveredItem('');
    };


    const isOverlayDarken = hoveredItem !== '';

    return (
        <main className='pt-20 m-auto'>
            <div className='relative w-full h-full'>
                <Image src={room} alt='room'/>
                {/* 오버레이 */}
                <div className={`absolute top-0 left-0 w-full h-full transition-opacity ease-in-out duration-500 ${isOverlayDarken ? 'bg-black opacity-50' : 'opacity-0'}`}>
                </div>

                {/* 테이블 아이템 */}
                <div className='absolute top-0 left-0 w-full h-full'>
                    <div className='cursor-pointer' style={{top: '320px', left: '190px', position: 'absolute'}}
                         onClick={handleTableItem}
                         onMouseEnter={() => handleMouseEnter('table')}
                         onMouseLeave={handleMouseLeave}>
                        {
                            hoveredItem === 'table' &&
                          <div className={'absolute right-0 -top-50'}>
                            <NameTag name={'랜덤식사'}/>
                          </div>
                        }
                        <Image src={hoveredItem === 'table' ? hoverTable : table} alt='table'/>
                    </div>

                    {/* 게임 아이템 */}
                    <div className='absolute cursor-pointer main_item_hover' style={{top: '400px', right: '30px'}}
                         onClick={handleGameItem}
                         onMouseEnter={() => handleMouseEnter('game')}
                         onMouseLeave={handleMouseLeave}>
                        {
                            hoveredItem === 'game' &&
                          <div className={'absolute left-90 -top-40'}>
                            <NameTag name={'경품추첨'}/>
                          </div>
                        }
                        <Image src={hoveredItem === 'game' ? hoverGame : game} alt='game'/>
                    </div>

                    {/* 공지사항 아이템 */}
                    <div className='absolute cursor-pointer main_item_hover' style={{top: '300px', right: '150px'}}
                         onClick={handleNoticeItem}
                         onMouseEnter={() => handleMouseEnter('notice')}
                         onMouseLeave={handleMouseLeave}>
                        {
                            hoveredItem === 'notice' &&
                          <div className={'absolute right-0 -top-50 w-104'}>
                            <NameTag name={'맛집 리스트'}/>
                          </div>
                        }
                        <Image src={hoveredItem === 'notice' ? hoverNotice : notice} alt='notice'/>
                    </div>

                    {/* 케이크 아이템 */}
                    <div className='absolute cursor-pointer main_item_hover'
                         style={{
                             top: hoveredItem === 'cake' ? '568px' : '570px',
                             right: hoveredItem === 'cake' ? "328px" : '330px'
                         }}
                         onClick={handleCakeItem}
                         onMouseEnter={() => handleMouseEnter('cake')}
                         onMouseLeave={handleMouseLeave}>
                        {
                            hoveredItem === 'cake' &&
                          <div className={'absolute -left-20 -top-50 w-104'}>
                            <NameTag name={'오늘의 생일'}/>
                          </div>
                        }
                        <Image src={hoveredItem === 'cake' ? hoverCake : cake} alt='cake'/>
                    </div>
                </div>
            </div>
            <ToastPopup
                message={message}
                isVisible={isToastVisible}
                onClose={hideToast}
            />
        </main>
    );
}

export default Main;

const NameTag = ({name}: { name: string }) => {
    return (
        <div className={'bg-[#53FFBE] text-black w-fit pb-4 p-6 '}>
            {name}
        </div>
    )
}
