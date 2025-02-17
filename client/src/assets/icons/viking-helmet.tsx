import React from 'react';

function VikingHelmet(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <>
      <svg
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 512 512'
        {...props}
      >
        <path d='M52.441 53.88c-35.103 34.696-41.31 73.89-33.228 117.837 6.29 34.202 22.079 70.807 40.892 107.767 17.738-27.114 41.117-56.824 68.676-78.517-20.7-17.164-38.261-35.891-51.367-56.447-17.29-27.12-26.504-57.61-24.973-90.64zm407.118 0c1.531 33.03-7.683 63.52-24.973 90.64-13.106 20.556-30.667 39.283-51.367 56.447 27.559 21.693 50.938 51.403 68.676 78.517 18.813-36.96 34.603-73.565 40.892-107.767 8.082-43.947 1.875-83.141-33.228-117.836zM256 179c-8.702 0-17.061 2.757-23 7.316v22.38c6.7-2.648 14.535-4.016 23-4.016s16.3 1.368 23 4.015v-22.379c-5.939-4.559-14.298-7.316-23-7.316zm-41 30.053c-30.485 11.577-60.043 34.66-84.166 62.804C98.718 309.326 76.784 355.501 73.482 391H215V209.053zm82 0V391h141.518c-3.301-35.499-25.236-81.674-57.352-119.143-24.123-28.143-53.681-51.227-84.166-62.804zm-153.502 3.49c-29.097 22.175-55.189 56.212-73.732 85.506a2034.036 2034.036 0 0 0 9.447 17.562c10.162-19.226 23.088-38.126 37.953-55.468 11.983-13.98 25.289-26.965 39.557-38.155a416.25 416.25 0 0 1-13.225-9.445zm225.004 0a416.25 416.25 0 0 1-13.225 9.445c14.268 11.19 27.574 24.175 39.557 38.155 14.865 17.342 27.79 36.242 37.953 55.468 3.179-5.85 6.339-11.705 9.447-17.562-18.543-29.294-44.635-63.33-73.732-85.506zM256 222.68c-7.62 0-14.449 1.66-18.602 3.736-3.262 1.631-4.103 2.973-4.318 3.264.215.29 1.056 1.632 4.318 3.263 4.153 2.077 10.981 3.737 18.602 3.737 7.62 0 14.449-1.66 18.602-3.737 3.262-1.63 4.103-2.972 4.318-3.263-.215-.291-1.056-1.633-4.318-3.264-4.153-2.077-10.981-3.736-18.602-3.736zm22.92 7c.059.08.08.095.08 0 0-.096-.021-.08-.08 0zm-45.84 0c-.059-.08-.08-.096-.08 0 0 .095.021.08.08 0zm-.08 20.984v48.352c6.7-2.648 14.535-4.016 23-4.016s16.3 1.368 23 4.016v-48.352c-6.7 2.648-14.535 4.016-23 4.016s-16.3-1.368-23-4.016zM256 313c-7.62 0-14.449 1.66-18.602 3.736-3.262 1.632-4.103 2.973-4.318 3.264.215.291 1.056 1.632 4.318 3.264C241.551 325.34 248.38 327 256 327c7.62 0 14.449-1.66 18.602-3.736 3.262-1.632 4.103-2.973 4.318-3.264-.215-.291-1.056-1.632-4.318-3.264C270.449 314.66 263.62 313 256 313zm22.92 7c.059.08.08.096.08 0s-.021-.08-.08 0zm-45.84 0c-.059-.08-.08-.096-.08 0s.021.08.08 0zm-.08 20.984v45.87c6.7-2.649 14.535-4.016 23-4.016s16.3 1.367 23 4.016v-45.87c-6.7 2.648-14.535 4.016-23 4.016s-16.3-1.368-23-4.016zm23 59.854c-7.62 0-14.449 1.66-18.602 3.736-3.262 1.631-4.103 2.973-4.318 3.264.215.29 1.056 1.632 4.318 3.264 4.153 2.076 10.981 3.736 18.602 3.736 7.62 0 14.449-1.66 18.602-3.736 3.262-1.632 4.103-2.973 4.318-3.264-.215-.291-1.056-1.633-4.318-3.264-4.153-2.076-10.981-3.736-18.602-3.736zm22.92 7c.059.08.08.095.08 0 0-.096-.021-.08-.08 0zm-45.84 0c-.059-.08-.08-.096-.08 0 0 .095.021.08.08 0zM73 409v30h18.455c-2.78-4.422-4.455-9.52-4.455-15s1.676-10.578 4.455-15H73zm55 0c-7.013 0-13.194 2.204-17.227 5.229C106.74 417.253 105 420.615 105 424c0 3.385 1.74 6.747 5.773 9.771C114.806 436.796 120.987 439 128 439s13.194-2.204 17.227-5.229C149.26 430.747 151 427.385 151 424c0-3.385-1.74-6.747-5.773-9.771C141.194 411.204 135.013 409 128 409zm36.545 0c2.78 4.422 4.455 9.52 4.455 15s-1.676 10.578-4.455 15H215v-30h-50.455zM297 409v30h50.455c-2.78-4.422-4.455-9.52-4.455-15s1.676-10.578 4.455-15H297zm87 0c-7.013 0-13.194 2.204-17.227 5.229C362.74 417.253 361 420.615 361 424c0 3.385 1.74 6.747 5.773 9.771C370.806 436.796 376.987 439 384 439s13.194-2.204 17.227-5.229C405.26 430.747 407 427.385 407 424c0-3.385-1.74-6.747-5.773-9.771C397.194 411.204 391.013 409 384 409zm36.545 0c2.78 4.422 4.455 9.52 4.455 15s-1.676 10.578-4.455 15H439v-30h-18.455zM233 428.822v16.453l23 34.5 23-34.5v-16.453c-6.7 2.648-14.535 4.016-23 4.016s-16.3-1.368-23-4.016z' />
      </svg>
    </>
  );
}

VikingHelmet.displayName = 'VikingHelmet';

export default VikingHelmet;
