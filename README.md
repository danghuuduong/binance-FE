# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```












this.isTrading = true;
this.totalAmount = 1400;
this.moneyfodingOne = 32; // không cần thiết sử dụng
this.foldingCurrent = 1;

this.crossOverResult = "no";
this.timeCrossEma = "no";
this.isActiveExecuteTrade = false

const maniTrading = () => {

 //1 phút vào đây 1 lần

 // Get mẹ api Statatus Trading
  if("Vào Tiền Mẹ rồi"){  //nếu mà Đã vào tiền
    if("xong rồi"){

      // a Update lại API (Lịch sử Chơi)
      // b. Post Api isActiveExecuteTradeApi = false

      if("Ăn"){
        // 1. foldingCurrent = 1
        // 3/ totalAmount = 1400.
        if(isWaiingTRading){
          //Cho phép dừng
        }
      } else("Thua"){ {
      const isFoldingbyMax = "folding" === 5 
        
        // 1. foldingCurrent = isFoldingbyMax ? (Trực tiếp bằng  1) : (foldingCurrent + 1)
        // 2/ totalAmount = 1400
        if(isWaiingTRading && isFoldingbyMax){
          //Cho phép dừng
        }
      }
    }
  }
  
  if (!isActiveExecuteTradeApi && EMA && (isTrading || isTradingApi)) {
    {
      //chú ý tạo ra hàm  handleFoldingtoMoney(folding) để lấy về 24 $
      // 0.2 Mua hoặc bán tùy vòa EMACross
      // 0.3. folding = 
      //  1. Mua vào 32 lên sàn$ handleFoldingtoMoney(folding)
      // + Viết tiếp hàm tính toán với 1000 giá BTC . làm sao chốt TP và SP đủ 32$

      //  2. isActiveExecuteTrade = true
    }
  }
}

// Nhiệm vụ tiếp theo 
// Thêm tính nagw chờ Kết thúc lệnh isWaiingTRading tại status API . === true ( Gửi kèm về websocket)
// Sửa chố Stattus button . dùng api . lấy từ websocket luôn