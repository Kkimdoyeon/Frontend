// FAQComponent.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FAQContainer, FAQTitle, FAQSubText, FAQItem, Question, Answer, ToggleIcon } from './FAQ.style';
import toggleIcon from '../../assets/FAQ/arrow.png';

export default function FAQComponent() {
    const [openIndex, setOpenIndex] = useState(null); // 현재 열려 있는 질문 인덱스

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        { question: "Q 리필스테이션 위치가 어디에 있나요?",
            answer: (
                <>
                    <h4>A :</h4>
                    각 대학에 따라 상이하며,<br />
                    대학별 정확한 위치는 배너-&gt; 캠코더 맵에서 확인하실 수 있습니다.<br />
                    그럼, 즐거운 캠코더 라이프를 보내세요!
                </>
            ) },
        { question: "Q 모두 친환경 제품으로 구성되어 있는건가요?\n",
            answer: (
                <>
                    <h4>A :</h4>
                    네, 캠코더 프로젝트에서 제공하는 모든 제품은 환경을 고려한 친환경 제품들로 구성되어 있습니다.<br/>
                    고체 샴푸/핸드솝/린스/바디바 모두 동물실험을 하지않고, ISO인증을 받았으며<br/>
                    전성분 ewg 그린등급이니 더욱 안전하게 이용하실 수 있습니다.<br/>
                    그럼, 즐거운 캠코더 라이프 보내세요!
                </>
            )
        },
        {
            question: "Q 금액을 잘못 보냈어요, 어떻게 해결하죠?\n ",
            answer: (
                <>
                    <h4>A :</h4>
                    금액을 잘못 송금하셨다면, 캠코더 @mnm_ddsl 에서 환불 요청을 해주시면 됩니다.<br/>
                    입금 내역을 확인한 후, 최대한 빠르게 환불 절차를 도와드리겠습니다.<br/>
                    그럼, 즐거운 캠코더 라이프 보내세요!
                </>
            )
        },
        { question: "Q 캡슐은 그냥 가져가면 되는건가요?\n ",
            answer: (
                <>
                    <h4>A :</h4>
                    캡슐을 가져가신 후, 편리한 시간에 다시 반환통에 반납해 주시면 됩니다.<br/>
                    또한, 리필 스테이션에는 친환경 크라프트지&비누망이 준비되어 있으니, 원하시는 것에 담으셔서 처음부터 캡슐은 반납함에 넣고<br/>
                    제품만 가져가실 수도 있습니다. 개인의 편의에 따라 두 가지 방법 중 하나를 선택하시면 됩니다.<br/>
                    그럼, 즐거운 캠코더 라이프 보내세요!
                </>
            )
        },
        { question: "Q 리필 제품의 사용주기는 어떻게 되나요?\n ",
            answer: (
                <>
                    <h4>A :</h4>
                    고체세제는 1캡슐=4정(약 1달 분량) 그 외 고체샴푸/린스/워시 등의 경우<br/>
                    2주를 예상합니다. 다만, 사용자에 따라 주기는 달라질 수 있음을 미리 말씀드립니다.<br/>
                    샴푸바 등 바의 형태의 경우 각 25g으로 아주 가벼워, MT를 가시는 등 여행에서도 가져가시길 추천드립니다!<br/>
                    그럼, 즐거운 캠코더 라이프 보내세요!
                </>
            )
        },
        { question: "Q 정기권인데, 바빠서 2번밖에 못갔어요. 나머지는 어떻게 되나요?\n ",
            answer:  (
                <>
                    <h4>A :</h4>
                    정기권을 이용하시다가 미사용하신 경우, @mnm_ddsl 측으로 연락해 주시면 남은 미사용 횟수를<br/>
                    다음 달로 이월해 드립니다. 문의해 주시면 빠르게 처리해 드리겠습니다.<br/>
                    그럼, 즐거운 캠코더 라이프 보내세요!
                </>
            )
        },
        { question: "Q 고체 바 성분은 어떻게 되는지 궁금해요 ",
            answer: (
                <>
                    <h4>A :</h4>
                    <h5>SHAMPOO -&gt; </h5>
                    <span style={{ fontSize: '17px'}}>
                        소듐코코일이세티오네이트,옥수수전분,코코베타인,코코베타인,글리 세린,세테아릴알코올,시어버터, 정제수,다시마추출물,에델바이스추출 물,
                    비터오렌지꽃추출물,목련꽃추출물,메도우스위트꽃추출물,데이지 꽃추출물, 구기자주출물,아카시아잎/나무분말,어성초추출물, 백년초주 출물,은행잎주출물, 월계수잎 추출물, 병풍주출물,
                    참당귀뿌리추출물, 고삼추출물,부틸렌글라이콜,베타인,소듐라우로일글루타메이트,DL-판테놀,
                    케라틴분말,모링가오일,올리브오일,피마자오일,동백오일,마카 다미아오일,검정콩분말,참숯분말,헥실신남알<br/>
                    </span>
                    <h5>CONDITIONER -&gt; </h5>
                    <span style={{ fontSize: '17px' }}>
                    세테아릴알코올,시어버터,베헨트라이모늄메토설페이트, 글리세릴스테 아레이트, 글리세린,정제수,소듐라우로일글루타메이트,DL-판테놀,
                    다 시마추출물,에델바이스추출물, 비터오렌지꽃추출물,목련꽃추출물,메 도우스위트꽃추출물,데이지 꽃추출물,구기자주출물,아카시아잎/나무 분말, 어성초추출물, 백년초추출물,은행잎추출물,월계수잎추출물,병품 추출물,참당귀뿌리추출물,고삼추출물,부틸렌글라이콜,베타인,
                    실크아 미노산,아르간오일,모가오일,올리브오일,피마자오일,동백오일,마카 다미아오일,단호박분말,핵실신남알<br/>
                    </span>
                    <h5>FACE&BODY -&gt; </h5>
                    <span style={{ fontSize: '17px' }}>
                    소듐스테아레이트,소듐라우레이트,소듐팔미테이트,소듐미리스테이트, 정제수,글리세린,테트라소듐이디티에이,테트라소듐에티트로네이트,
                    코 코베타인, 디프로필렌글라이콜,DL-판테놀,부틸렌글라이콜,에델바이스 추출물,비터오렌지꽃추출물,목련꽃추출물,메도우스위트 꽃추출물,
                    데이 지꽃추출물,구기자추순물,아카시아잎/나무분말,어성초추출물,백년초 추출물,은행잎추출물,월계수잎주출물, 명품주출물,참당귀뿌리주출물,
                    고 삼주출물,부탈렌글라이콜,베타인,어성초주출물,아보카도오일, 올리브오 일,피마자오일,동백오일,마카다미아오일,새싹보리분말,헥실신남알<br/>
                    </span>
                    <h5>HAND SOAP -&gt; </h5>
                    <span style={{ fontSize: '17px' }}>
                    소듐스테아레이트,소듐라우레이트,소듐팔미테이트,소듐미리스테이 트,정제수,글리세린,테트라소듐이디티에이,테트라소듐에티트로네이 트,
                    코코베타인,부틸렌글라이콜,에델바이스추출물,비터오렌지꽃추출 물,목련꽃추출물,메도우스위트꽃추출물,데이지꽃추출물, 구기자주출 물,
                    아카시아잎/나무분말,어성초추출물,백년초추출물,은행잎추출물.
                    월계수잎주출물,명풀수출물,참당귀뿌리주출물,고삼주출물, 부틸렌글라이콜, 베타인, 어성초추출물, 아보카도오일, 올리브오일, 피마자오일,
                    동백오일. 마카다미아오일, 핵실신남알<br/>
                    </span>
                </>
            )
        }
    ];

    return (
        <FAQContainer>
            <FAQTitle>FAQ</FAQTitle>
            <FAQSubText>**그 외 긴급 문의사항은 @mnm_ddsl을 이용바랍니다.</FAQSubText>

            {faqData.map((item, index) => (
                <FAQItem key={index}>
                    <Question onClick={() => toggleAnswer(index)}>
                        {item.question}
                        <ToggleIcon isOpen={openIndex === index}>
                            <img src={toggleIcon} alt="Toggle Icon" style={{ width: '21.23px', height: '9.34px' }} />
                        </ToggleIcon>
                    </Question>
                    <Answer isOpen={openIndex === index}>
                        {item.answer}
                    </Answer>
                </FAQItem>
            ))}
        </FAQContainer>
    );
}
