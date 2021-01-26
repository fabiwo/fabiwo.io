export default function SocialIcon({ type }) {
  return (
    <svg
      viewBox='0 0 50 50'
      xmlns='http://www.w3.org/2000/svg'
      className={`${type === 'mail' ? 'stroke-current' : 'fill-current'}`}
    >
      {type === 'github' ? (
        <path d='M21.8174 13C14.7358 13 9 18.739 9 25.8174C9 31.4816 12.6722 36.2849 17.7639 37.9779C18.4047 38.0986 18.6397 37.7023 18.6397 37.3616C18.6397 37.0571 18.6291 36.2507 18.6237 35.1826C15.0583 35.9559 14.3064 33.4629 14.3064 33.4629C13.7232 31.9836 12.8805 31.5884 12.8805 31.5884C11.7194 30.7937 12.9702 30.8097 12.9702 30.8097C14.2573 30.8995 14.9334 32.1299 14.9334 32.1299C16.0763 34.0899 17.9337 33.5238 18.6664 33.1959C18.7818 32.3671 19.1118 31.802 19.4782 31.4816C16.6317 31.1611 13.6399 30.0589 13.6399 25.1477C13.6399 23.7484 14.1366 22.6056 14.959 21.7083C14.8148 21.3847 14.3822 20.0816 15.0712 18.316C15.0712 18.316 16.1446 17.9721 18.5959 19.6298C19.6213 19.3446 20.7108 19.2036 21.8003 19.1972C22.8898 19.2036 23.9792 19.3446 25.0046 19.6298C27.4399 17.9721 28.5134 18.316 28.5134 18.316C29.2023 20.0816 28.7697 21.3847 28.6416 21.7083C29.4587 22.6056 29.9553 23.7484 29.9553 25.1477C29.9553 30.0717 26.9593 31.1558 24.1074 31.4709C24.556 31.8554 24.9726 32.6416 24.9726 33.8421C24.9726 35.5575 24.9566 36.9354 24.9566 37.3519C24.9566 37.6884 25.1809 38.0889 25.8378 37.9608C30.9658 36.2796 34.6347 31.473 34.6347 25.8174C34.6347 18.739 28.8958 13 21.8174 13Z' />
      ) : type === 'instagram' ? (
        <path d='M24.5 13C21.1042 13 20.6802 13.0156 19.3469 13.075C18.0156 13.1375 17.1094 13.3469 16.3125 13.6562C15.4906 13.975 14.7927 14.4031 14.0979 15.0979C13.4031 15.7927 12.974 16.4896 12.6562 17.3125C12.3469 18.1094 12.1365 19.0156 12.075 20.3469C12.0125 21.6802 12 22.1042 12 25.5C12 28.8958 12.0156 29.3198 12.075 30.6531C12.1375 31.9833 12.3469 32.8906 12.6562 33.6875C12.975 34.5083 13.4031 35.2073 14.0979 35.9021C14.7927 36.5958 15.4896 37.026 16.3125 37.3438C17.1104 37.6521 18.0167 37.8635 19.3469 37.925C20.6802 37.9875 21.1042 38 24.5 38C27.8958 38 28.3198 37.9844 29.6531 37.925C30.9833 37.8625 31.8906 37.6521 32.6875 37.3438C33.5083 37.025 34.2073 36.5958 34.9021 35.9021C35.5958 35.2073 36.026 34.5115 36.3438 33.6875C36.6521 32.8906 36.8635 31.9833 36.925 30.6531C36.9875 29.3198 37 28.8958 37 25.5C37 22.1042 36.9844 21.6802 36.925 20.3469C36.8625 19.0167 36.6521 18.1083 36.3438 17.3125C36.025 16.4906 35.5958 15.7927 34.9021 15.0979C34.2073 14.4031 33.5115 13.974 32.6875 13.6562C31.8906 13.3469 30.9833 13.1365 29.6531 13.075C28.3198 13.0125 27.8958 13 24.5 13ZM24.5 15.25C27.8365 15.25 28.2344 15.2667 29.5521 15.324C30.7708 15.3812 31.4323 15.5833 31.8719 15.7562C32.4573 15.9823 32.8719 16.2531 33.3115 16.6896C33.7479 17.1271 34.0187 17.5427 34.2448 18.1281C34.4156 18.5677 34.6198 19.2292 34.675 20.4479C34.7344 21.7667 34.7479 22.1625 34.7479 25.5C34.7479 28.8375 34.7323 29.2344 34.6708 30.5521C34.6073 31.7708 34.4042 32.4323 34.2323 32.8719C33.999 33.4573 33.7333 33.8719 33.2958 34.3115C32.8594 34.7479 32.4375 35.0187 31.8583 35.2448C31.4208 35.4156 30.749 35.6198 29.5302 35.675C28.2031 35.7344 27.8125 35.7479 24.4688 35.7479C21.124 35.7479 20.7333 35.7323 19.4073 35.6708C18.1875 35.6073 17.5156 35.4042 17.0781 35.2323C16.4854 34.999 16.0781 34.7333 15.6417 34.2958C15.2031 33.8594 14.9229 33.4375 14.7042 32.8583C14.5323 32.4208 14.3302 31.749 14.2667 30.5302C14.2198 29.2177 14.2031 28.8125 14.2031 25.4844C14.2031 22.1552 14.2198 21.749 14.2667 20.4208C14.3302 19.2021 14.5323 18.5312 14.7042 18.0937C14.9229 17.5 15.2031 17.0938 15.6417 16.6552C16.0781 16.2188 16.4854 15.9375 17.0781 15.7198C17.5156 15.5469 18.1729 15.3438 19.3917 15.2812C20.7198 15.2344 21.1104 15.2188 24.4531 15.2188L24.5 15.25ZM24.5 19.0812C20.9531 19.0812 18.0812 21.9562 18.0812 25.5C18.0812 29.0469 20.9562 31.9188 24.5 31.9188C28.0469 31.9188 30.9188 29.0437 30.9188 25.5C30.9188 21.9531 28.0437 19.0812 24.5 19.0812ZM24.5 29.6667C22.1979 29.6667 20.3333 27.8021 20.3333 25.5C20.3333 23.1979 22.1979 21.3333 24.5 21.3333C26.8021 21.3333 28.6667 23.1979 28.6667 25.5C28.6667 27.8021 26.8021 29.6667 24.5 29.6667ZM32.6729 18.8281C32.6729 19.6562 32 20.3281 31.1729 20.3281C30.3448 20.3281 29.6729 19.6552 29.6729 18.8281C29.6729 18.001 30.3458 17.3292 31.1729 17.3292C31.999 17.3281 32.6729 18.001 32.6729 18.8281Z' />
      ) : type === 'linkedin' ? (
        <path d='M34.299 34.3042H30.5969V28.5031C30.5969 27.1198 30.5688 25.3396 28.6677 25.3396C26.7375 25.3396 26.4427 26.8448 26.4427 28.401V34.3042H22.7406V22.375H26.2969V24.001H26.3448C26.8417 23.0635 28.05 22.074 29.8552 22.074C33.6062 22.074 34.3 24.5427 34.3 27.7562V34.3042H34.299ZM18.5594 20.7427C17.3677 20.7427 16.4104 19.7781 16.4104 18.5917C16.4104 17.4062 17.3687 16.4427 18.5594 16.4427C19.7469 16.4427 20.7094 17.4062 20.7094 18.5917C20.7094 19.7781 19.7458 20.7427 18.5594 20.7427ZM20.4156 34.3042H16.7031V22.375H20.4156V34.3042ZM36.151 13H14.8448C13.825 13 13 13.8062 13 14.801V36.199C13 37.1948 13.825 38 14.8448 38H36.1479C37.1667 38 38 37.1948 38 36.199V14.801C38 13.8062 37.1667 13 36.1479 13H36.151Z' />
      ) : type === 'twitter' ? (
        <path d='M40.6987 15.9779C39.5472 16.4849 38.3272 16.8196 37.0781 16.9711C38.3932 16.1807 39.3779 14.9411 39.8503 13.4813C38.6315 14.1926 37.2806 14.7103 35.8427 14.9987C34.8939 13.9842 33.6368 13.3113 32.2665 13.0846C30.8961 12.8579 29.4893 13.0899 28.2643 13.7447C27.0394 14.3996 26.065 15.4405 25.4923 16.706C24.9197 17.9714 24.7809 19.3905 25.0975 20.7429C19.8557 20.4956 15.2124 17.9772 12.1019 14.1733C11.5364 15.1343 11.2415 16.2304 11.2483 17.3454C11.2483 19.5369 12.3633 21.4632 14.0525 22.5949C13.0514 22.563 12.0723 22.2923 11.197 21.8054V21.8823C11.1965 23.3387 11.6998 24.7505 12.6216 25.8781C13.5434 27.0057 14.8269 27.7797 16.2543 28.0687C15.3294 28.3165 14.3606 28.3538 13.4194 28.1776C13.8245 29.4311 14.6108 30.5268 15.6686 31.3118C16.7264 32.0969 18.0029 32.5322 19.32 32.5569C17.0893 34.3076 14.3351 35.2577 11.4995 35.2548C10.9997 35.2548 10.5011 35.2253 10 35.1689C12.891 37.02 16.2524 38.0026 19.6852 38C31.2878 38 37.6254 28.3929 37.6254 20.0765C37.6254 19.8074 37.6254 19.5382 37.6062 19.2691C38.8442 18.3782 39.9121 17.2721 40.759 16.0035L40.6987 15.9779Z' />
      ) : type === 'mail' ? (
        <>
          <path
            d='M15.5 15H35.5C36.875 15 38 16.125 38 17.5V32.5C38 33.875 36.875 35 35.5 35H15.5C14.125 35 13 33.875 13 32.5V17.5C13 16.125 14.125 15 15.5 15Z'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            fill='white'
          />
          <path
            d='M38 18L25.5 26L13 18'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            fill='white'
          />
        </>
      ) : (
        ''
      )}
    </svg>
  )
}