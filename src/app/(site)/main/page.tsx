"use client"
import React, {useState} from 'react';
import {useRouter} from "next/navigation";
import Image from "next/image";
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
    const [text, setText] = useState('' as string)
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

    return (
        <main className='pt-20 m-auto'>
            <div className='relative w-full h-full'>
                <Image src={room} alt='room'/>
                <div className='absolute cursor-pointer main_item_hover' style={{top: '320px', left: '190px'}}
                     onClick={handleTableItem}
                     onMouseEnter={() => setHoveredItem('table')}
                     onMouseLeave={() => setHoveredItem('')}>
                    {
                        hoveredItem === 'table' &&
                      <div className={'absolute right-0 -top-50'}>
                        <NameTag name={'랜덤식사'}/>
                      </div>
                    }
                    <Image src={hoveredItem === 'table' ? hoverTable : table} alt='table'/>
                </div>

                <div className='absolute cursor-pointer main_item_hover' style={{top: '400px', right: '30px'}}
                     onClick={handleGameItem}
                     onMouseEnter={() => setHoveredItem('game')}
                     onMouseLeave={() => setHoveredItem('')}>
                    {
                        hoveredItem === 'game' &&
                      <div className={'absolute left-90 -top-40'}>
                        <NameTag name={'경품추첨'}/>
                      </div>
                    }
                    <Image src={hoveredItem === 'game' ? hoverGame : game} alt='game'/>
                </div>

                <div className='absolute cursor-pointer main_item_hover' style={{top: '300px', right: '150px'}}
                     onClick={handleNoticeItem}
                     onMouseEnter={() => setHoveredItem('notice')}
                     onMouseLeave={() => setHoveredItem('')}>
                    {
                        hoveredItem === 'notice' &&
                      <div className={'absolute right-0 -top-50 w-104'}>
                        <NameTag name={'맛집 리스트'}/>
                      </div>
                    }
                    <Image src={hoveredItem === 'notice' ? hoverNotice : notice} alt='notice'/>
                </div>

                <div className='absolute cursor-pointer main_item_hover'
                     onClick={handleCakeItem}
                     style={{top: hoveredItem === 'cake' ? '568px' : '570px', right: hoveredItem === 'cake' ? "328px" : '330px'}}
                     onMouseEnter={() => setHoveredItem('cake')}
                     onMouseLeave={() => setHoveredItem('')}>
                    {
                        hoveredItem === 'cake' &&
                      <div className={'absolute -left-20 -top-50 w-104'}>
                        <NameTag name={'오늘의 생일'}/>
                      </div>
                    }
                    <Image src={hoveredItem === 'cake' ? hoverCake : cake} alt='cake'/>
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
