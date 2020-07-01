import * as React from 'react';
import { theme } from "@chakra-ui/core";


export default {
    icons: {
        // Add Chakra's icons
        ...theme.icons,
        // Your custom icons
        ribbon: {
            path: (
                <>
                    <path fill="currentColor" d="M3.95,13.908L0.125,21.5l5.434-1.358L8,24l2.94-6.058C8.074,17.639,5.575,16.115,3.95,13.908 z" />
                    <path fill="currentColor" d="M20.05,13.908l3.825,7.592l-5.434-1.358L16,24l-2.94-6.058 C15.926,17.639,18.425,16.115,20.05,13.908z" />
                    <path fill="currentColor" d="M12,0C7.589,0,4,3.589,4,8s3.589,8,8,8s8-3.589,8-8S16.411,0,12,0z M12,10c-1.105,0-2-0.895-2-2 c0-1.105,0.895-2,2-2s2,0.895,2,2C14,9.105,13.105,10,12,10z" />
                </>
            ),
            viewBox: "0 0 24 24",
        }
    }
};

