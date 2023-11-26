"use client"
import Image from "next/image";
import phone from '@image/phone_2.svg'
import pencil from '@image/account/ic-pencil.svg'
import saved from '@image/account/ic-saved.svg'
import profile from '@image/account/profile.svg'
import heartFull from '@image/account/heart_full.svg'
import heartEmpty from '@image/account/heart_empty.svg'
import camera from '@image/account/camera.svg'
import {useEffect, useState} from "react";
import Modal from "@components/common/Modal";
import useModal from "@hooks/useModal";
import CustomInput from "@components/login/CustomInput";
import {useForm} from "react-hook-form";
import PushButton from "@components/common/PushButton";
import close from '@image/random-lunch/close_pink.svg'
import apiClientHandler from "@lib/apiClientHandler";
import {getMyProfile, updateMyProfile} from "@api/Account";
import {updatePassword} from "@api/Auth";
import boy from "@image/boy.svg";
import girl from "@image/girl.svg";
import {useUserContext} from "@context/UserContext";

export default function MyAccount() {
    const [isEdit, setIsEdit] = useState(false);
    const {isModalVisible, showModal, hideModal} = useModal();
    const userInfo = useUserContext()?.userInfo;

    const {register, handleSubmit, setValue, formState: {errors}, watch} = useForm({
        defaultValues: {
            disLikeFood: '',
            likeFood: '',
            introduce: '',
            spicyLevel: 1,
            userId: '',
            userName: '-',
        }
    });

    const fetchMyProfile = async () => {
        const res = await apiClientHandler(getMyProfile());
        if (res.result) {
            // useForm의 setValue를 사용하여 폼 데이터 설정
            const {disLikeFood, likeFood, introduce, spicyLevel, userId, accessId} = res.data
            setValue('disLikeFood', disLikeFood);
            setValue('likeFood', likeFood);
            setValue('introduce', introduce);
            setValue('spicyLevel', spicyLevel || 1); //기본값을1 로주면좋겠음!
            setValue('userId', userId);
            setValue('userName', accessId);

        }
    };

    useEffect(() => {
        fetchMyProfile();
    }, []);

    // 폼 제출 핸들러
    const onSubmit = async (data: any) => {
        const res = await apiClientHandler(updateMyProfile({data: data}));
        if (res.result) {
            await fetchMyProfile()
            setIsEdit(false);
        } else {
            alert('수정한 내용을 저장하지 못했어요.')
        }
    };

    const inputStyle = 'text-18 bg-transparent outline-none w-240 text-right'
    const editMode = 'border-1 border-white p-15'
    const nonEditMode = 'border-transparent p-16'

    return (
        <>
            <main className="max-w-[1500px] pb-24 mt-80 relative">
                <Image src={phone} alt="phone" className="w-full h-full"/>
                <form className={'absolute top-0 w-full h-[calc(100%-64px)] pt-50 pb-149 px-60'}
                      onSubmit={handleSubmit(onSubmit)}>
                    <article className="relative">
                        <div className={'flex items-center w-full justify-end'} onClick={() => setIsEdit(!isEdit)}>
                            <span className={'text-14 mr-4 cursor-pointer'}>
                                <button type={!isEdit ? "submit" : "button"}>{isEdit ? '저장하기' : '수정하기'}</button>
                            </span>
                            <Image src={isEdit ? saved : pencil} alt={'pencil'} width={36} height={36}
                                   className={'cursor-pointer'}/>
                        </div>
                    </article>
                    <article className={'my-40 flex justify-center items-center flex-col w-full'}>
                        <div className="relative">
                            {/*<Image src={profile} alt={'profile'} className={'mb-16'} width={100} height={100}/>*/}
                            <Image src={userInfo?.gender === 'MEN' ? boy:girl} alt={'Avatar'} width={70} className={'m-auto mb-10'}/>
                            {/*{*/}
                            {/*    isEdit &&*/}
                            {/*  <Image src={camera} alt="camera" className="absolute -mt-50 right-1 cursor-pointer"/>*/}
                            {/*}*/}
                        </div>

                        <p className={'text-24'}>Hello!</p>
                        <p className={'text-sp_pink text-32 -mt-6'}>{watch('userName')}</p>
                    </article>
                    <article className={'flex flex-col h-[calc(100%-280px)] overflow-y-scroll scroll-hidden gap-y-20'}>
                        <div>
                            <div
                                className={`${isEdit ? editMode : nonEditMode} w-full flex justify-between items-center`}>
                                <span className="text-[#BBB]"> 선호 음식</span>
                                <input
                                    {...register('likeFood')}
                                    readOnly={!isEdit}
                                    className={`${inputStyle}`}
                                    placeholder={'좋아하는 음식 적어주셈'}
                                    autoComplete="off"
                                />
                            </div>
                            {isEdit && <p className="mt-9 text-12 text-[#BBB]">최대 음식 3개만 작성해주세요!</p>}
                        </div>

                        <div>
                            <div
                                className={`${isEdit ? editMode : nonEditMode} w-full flex justify-between items-center`}>
                                <span className="text-[#BBB]">비선호 음식</span>
                                <input
                                    {...register('disLikeFood')}
                                    readOnly={!isEdit}
                                    className={`${inputStyle}`}
                                    placeholder={'싫어하는 음식 적어주셈'}
                                    autoComplete="off"
                                />
                            </div>
                            {isEdit && <p className="mt-9 text-12 text-[#BBB]">최대 음식 3개만 작성해주세요!</p>}
                        </div>


                        <div className={`${isEdit ? editMode : nonEditMode} w-full flex justify-between items-center`}>
                            <span className="text-[#BBB]">맵난이도</span>
                            <span className={'text-18 flex gap-x-2'}>
                            {[1, 2, 3, 4, 5].map(level => (
                                <div
                                    key={level}
                                    onClick={() => {
                                        if (isEdit) {
                                            setValue('spicyLevel', level); // 맵난이도 설정
                                        }
                                    }}
                                >
                                    <Image
                                        src={level <= watch('spicyLevel') ? heartFull : heartEmpty} // 현재 맵난이도에 따라 이미지 선택
                                        alt={`Heart ${level}`}
                                        className={isEdit ? 'cursor-pointer' : ''}
                                    />
                                </div>
                            ))}
                            </span>
                        </div>

                        <div className={`w-full flex flex-col ${isEdit ? editMode : nonEditMode}`}>
                            <p className={'mb-16 text-[#BBB]'}>내 소개</p>
                            <textarea{...register('introduce')}
                                     placeholder={'자기소개 적어주셈😊'}
                                     readOnly={!isEdit}
                                     autoComplete="off"
                                     className={`h-90 w-full resize-none outline-none bg-transparent`}/>
                        </div>
                    </article>
                </form>

            </main>
            <section>
                <button
                    onClick={showModal}
                    className={'bg-sp_blue p-16 absolute right-24 bottom-24 text-black rounded-4 hover:brightness-75 transition-all'}>
                    비밀번호 변경
                </button>
                <Modal isVisible={isModalVisible}>
                    {/* 커스텀 닫기 버튼 추가 */}
                    <ModalContents hideModal={hideModal}/>

                </Modal>
            </section>

        </>

    );
}


const ModalContents = ({hideModal}: { hideModal: () => void }) => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = async (data: any) => {

        const res = await apiClientHandler(updatePassword({
            password: data.old_password,
            newPassword: data.new_password
        }))
        if(res.result){
            alert('비밀번호가 변경되었습니다.')
            hideModal()
        }else {
            alert(res.message)
        }
    };


    return (
        <article className={'p-24 bg-sp_pink w-550'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={'flex flex-col gap-y-54'}>
                    <CustomInput
                        label={'기존 비밀번호'}
                        theme={'green'}
                        isError={errors.old_password && true}
                        labelColor={'black'}
                        type={'password'}
                        register={register("old_password", {required: true})}
                    />
                    <CustomInput
                        label={'새 비밀번호'}
                        theme={'green'}
                        isError={errors.new_password && true}
                        labelColor={'black'}
                        type={'newPassword'}
                        register={register("new_password", {required: true})}
                    />
                </div>

                <div className={'flex justify-between mt-54'}>
                    <PushButton
                        label={'취소하기'}
                        onClick={hideModal}
                        theme={'white_green'}
                        type={'button'}
                    />
                    <PushButton
                        label={'변경하기'}
                        onClick={handleSubmit(onSubmit)}
                        theme={'green'}
                        type={'submit'}
                    />
                </div>
            </form>
        </article>
    )
}