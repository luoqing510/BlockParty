<template>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1"
        :width="width" :height="width" :viewBox="`0,0,${width},${width}`">
        <defs>
            <clipPath id="master_svg0_17_279">
                <rect x="0" y="0" :width="width" :height="width" rx="0" />
            </clipPath>
        </defs>
        <g clip-path="url(#master_svg0_17_279)">
            <g>
                <path
                    d="M2.51162,16.5348L1.25581,16.5348L1.25581,12.7674L5.02324,12.7674L5.02324,14.0232L2.51162,14.0232L2.51162,16.5348ZM8.99998,18C5.88299,18.0095,2.98535,16.3974,1.35,13.7438L2.41744,13.0814C5.23087,17.621,11.6868,18.0173,15.0342,13.8557C18.3817,9.69415,16.6111,3.47316,11.574,1.69799C6.53683,-0.0771745,1.25712,3.65919,1.25581,8.99998L0,8.99998C0,4.02943,4.02943,0,8.99998,0C13.9705,0,18,4.02943,18,8.99998C18,13.9705,13.9705,18,8.99998,18Z"
                    :fill="color" fill-opacity="1" />
            </g>
        </g>
    </svg>
</template>
<script lang="ts">
export default {
    props: {
        color: {
            default: "#00A0E9"
        },
        width: {
            default: "18" as any
        }
    }
}
</script>