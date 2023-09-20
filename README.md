## About
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Go Report Card](https://goreportcard.com/badge/github.com/huantt/plaintext-extractor)](https://goreportcard.com/report/github.com/huantt/plaintext-extractor)

This is `dynamic-thumbnail-service-v2`. It's X5 faster compared to the [previous version](https://github.com/huantt/dynamic-thumbnail-service-ts).

In this version, we no longer use Puppeteer (a headless browser) to capture HTML and then return images. Instead, we utilize the [@vercel/og](https://vercel.com/docs/functions/edge-functions/og-image-generation) library, which employs [Satori](https://github.com/vercel/satori) as its core engine.

_(Satori: Enlightened library is used to convert HTML and CSS into SVG))_

## Usage
<details>
<summary>Run</summary>

### Run local
```shell
pnpm install
pnpm run dev
```

### Run Docker
```shell
docker build -t dynamic-thumbnail-service .
```
```shell
docker run -p 3001:3000 dynamic-thumbnail-service:latest
```

Now service is live on http://localhost:3001
</details>

<details>
<summary>Available endpoints</summary>

**1/ API debug html**

`GET:` /article/thumbnail/html

Params:
- title: your article title
- author: author name
- avatar: avatar url

**2/ API thumbnail image**

`GET:` /article/thumbnail/article

Params:
- title: your article title
- author: author name
- avatar: avatar url
- debug: true/false

</details>

## Apply to your website
Insert the following meta tag into your website:
```html
<meta property="og:image" content="http://dynamic-thumbnail-service/article/thumbnail?title={TITLE}&author={AUTHOR}&avatar={AVATAR}">
```

Now, when user share your page to Twitter, Facebook, or Slack chat,... you will see this thumbnail:

![Jack dynamic thumbnail](docs/images/thumbnail.png)

You can use [Facebook debug tool](https://developers.facebook.com/tools/debug) to preview.

## Customize your own
Satori uses the same Flexbox layout engine as React Native, and it’s not a complete CSS implementation. However, it supports a subset of the spec that covers most common CSS features.
<details>
<summary>Available CSS features</summary>
<table>
<thead>
<tr>
  <th>Property</th>
  <th>Property Expanded</th>
  <th>Supported Values</th>
  <th>Example</th>
</tr>
</thead>
<tbody>

<tr>
<td colspan="2"><code>display</code></td>
<td><code>none</code> and <code>flex</code>, default to <code>flex</code></td>
<td></td>
</tr>

<tr>
<td colspan="2"><code>position</code></td>
<td><code>relative</code> and <code>absolute</code>, default to <code>relative</code></td>
<td></td>
</tr>

<tr>
<td colspan="2"><code>color</code></td>
<td>Supported</td>
<td></td>
</tr>

<tr><td rowspan="5"><code>margin</code></td></tr>
<tr><td><code>marginTop</code></td><td>Supported</td><td></td></tr>
<tr><td><code>marginRight</code></td><td>Supported</td><td></td></tr>
<tr><td><code>marginBottom</code></td><td>Supported</td><td></td></tr>
<tr><td><code>marginLeft</code></td><td>Supported</td><td></td></tr>

<tr><td rowspan="5">Position</td></tr>
<tr><td><code>top</code></td><td>Supported</td><td></td></tr>
<tr><td><code>right</code></td><td>Supported</td><td></td></tr>
<tr><td><code>bottom</code></td><td>Supported</td><td></td></tr>
<tr><td><code>left</code></td><td>Supported</td><td></td></tr>

<tr><td rowspan="3">Size</td></tr>
<tr><td><code>width</code></td><td>Supported</td><td></td></tr>
<tr><td><code>height</code></td><td>Supported</td><td></td></tr>

<tr><td rowspan="5">Min & max size</td></tr>
<tr><td><code>minWidth</code></td><td>Supported except for <code>min-content</code> and <code>max-content</code></td><td></td></tr>
<tr><td><code>minHeight</code></td><td>Supported except for <code>min-content</code> and <code>max-content</code></td><td></td></tr>
<tr><td><code>maxWidth</code></td><td>Supported except for <code>min-content</code> and <code>max-content</code></td><td></td></tr>
<tr><td><code>maxHeight</code></td><td>Supported except for <code>min-content</code> and <code>max-content</code></td><td></td></tr>

<tr><td rowspan="5"><code>border</code></td></tr>
<tr><td>Width (<code>borderWidth</code>, <code>borderTopWidth</code>, ...)</td><td>Supported</td><td></td></tr>
<tr><td>Style (<code>borderStyle</code>, <code>borderTopStyle</code>, ...)</td><td><code>solid</code> and <code>dashed</code>, default to <code>solid</code></td><td></td></tr>
<tr><td>Color (<code>borderColor</code>, <code>borderTopColor</code>, ...)</td><td>Supported</td><td></td></tr>
<tr><td>
  Shorthand (<code>border</code>, <code>borderTop</code>, ...)</td><td>Supported, i.e. <code>1px solid gray</code><br/>
</td><td></td></tr>

<tr><td rowspan="6"><code>borderRadius</code></td></tr>
<tr><td><code>borderTopLeftRadius</code></td><td>Supported</td><td></td></tr>
<tr><td><code>borderTopRightRadius</code></td><td>Supported</td><td></td></tr>
<tr><td><code>borderBottomLeftRadius</code></td><td>Supported</td><td></td></tr>
<tr><td><code>borderBottomRightRadius</code></td><td>Supported</td><td></td></tr>
<tr><td>Shorthand</td><td>Supported, i.e. <code>5px</code>, <code>50% / 5px</code></td><td></td></tr>

<tr><td rowspan="11">Flex</td></tr>
<tr><td><code>flexDirection</code></td><td><code>column</code>, <code>row</code>, <code>row-reverse</code>, <code>column-reverse</code>, default to <code>row</code></td><td></td></tr>
<tr><td><code>flexWrap</code></td><td><code>wrap</code>, <code>nowrap</code>, <code>wrap-reverse</code>, default to <code>wrap</code></td><td></td></tr>
<tr><td><code>flexGrow</code></td><td>Supported</td><td></td></tr>
<tr><td><code>flexShrink</code></td><td>Supported</td><td></td></tr>
<tr><td><code>flexBasis</code></td><td>Supported except for <code>auto</code></td><td></td></tr>
<tr><td><code>alignItems</code></td><td><code>stretch</code>, <code>center</code>, <code>flex-start</code>, <code>flex-end</code>, <code>baseline</code>, <code>normal</code>, default to <code>stretch</code></td><td></td></tr>
<tr><td><code>alignContent</code></td><td>Supported</td><td></td></tr>
<tr><td><code>alignSelf</code></td><td>Supported</td><td></td></tr>
<tr><td><code>justifyContent</code></td><td>Supported</td><td></td></tr>
<tr><td><code>gap</code></td><td>Supported</td><td></td></tr>

<tr><td rowspan="5">Font</td></tr>
<tr><td><code>fontFamily</code></td><td>Supported</td><td></td></tr>
<tr><td><code>fontSize</code></td><td>Supported</td><td></td></tr>
<tr><td><code>fontWeight</code></td><td>Supported</td><td></td></tr>
<tr><td><code>fontStyle</code></td><td>Supported</td><td></td></tr>

<tr><td rowspan="12">Text</td></tr>
<tr><td><code>tabSize</code></td><td>Supported</td><td></td></tr>
<tr><td><code>textAlign</code></td><td><code>start</code>, <code>end</code>, <code>left</code>, <code>right</code>, <code>center</code>, <code>justify</code>, default to <code>start</code></td><td></td></tr>
<tr><td><code>textTransform</code></td><td><code>none</code>, <code>lowercase</code>, <code>uppercase</code>, <code>capitalize</code>, defaults to <code>none</code></td><td></td></tr>
<tr><td><code>textOverflow</code></td><td><code>clip</code>, <code>ellipsis</code>, defaults to <code>clip</code></td><td></td></tr>
<tr><td><code>textDecoration</code></td><td>Support line types <code>underline</code> and <code>line-through</code>, and styles <code>dotted</code>, <code>dashed</code>, <code>solid</code></td><td><a href="https://og-playground.vercel.app/?share=nVLLTsMwEPwVaxHqJYgUOCCr9EL5Ajj24mQ3icH1Ro5DW6L8O3ZeQpwKJ-_M7ox25O0gZySQsEH9ubdCNP5s6KnrYi1ERbqsvBSrdZper5KRPGr01S8OdVMbdQ5sYeg0s7HeaUe512xDL2fTHuzcrRWitqUU63RiMpV_lI5bi89s2AXFVVEUixtb_6q_SIr7u4kqVR3lEfT93m5jEZMsMYSnk99Rzk5NO1i2tArT21hsbsPwJaqwEjmjJ-mCLtbH4RtfhWxlNVj8JP6-hUD2nlA4wsFthP_aRqBqqmCVmXYMN-LZa34hAa6jvAHZwXACIB_TNIHxRkA-RICUtSXIQpmGEqADv-u3cx0PzB8HFHziP74cMkKQ3rXUJ-BVFiYqMoaP7AxC_w0">Example</a></td></tr>
<tr><td><code>textShadow</code></td><td>Supported</td><td></td></tr>
<tr><td><code>lineHeight</code></td><td>Supported</td><td></td></tr>
<tr><td><code>letterSpacing</code></td><td>Supported</td><td></td></tr>
<tr><td><code>whiteSpace</code></td><td><code>normal</code>, <code>pre</code>, <code>pre-wrap</code>, <code>pre-line</code>, <code>nowrap</code>, defaults to <code>normal</code></td><td></td></tr>
<tr><td><code>wordBreak</code></td><td><code>normal</code>, <code>break-all</code>, <code>break-word</code>, <code>keep-all</code>, defaults to <code>normal</code></td><td></td></tr>
<tr><td><code>textWrap</code></td><td><code>wrap</code>, <code>balance</code>, defaults to <code>wrap</code></td><td></td></tr>

<tr><td rowspan="7">Background</td></tr>
<tr><td><code>backgroundColor</code></td><td>Supported, single value</td><td></td></tr>
<tr><td><code>backgroundImage</code></td><td><code>linear-gradient</code>, <code>radial-gradient</code>, <code>url</code>, single value</td><td></td></tr>
<tr><td><code>backgroundPosition</code></td><td>Support single value</td><td></td></tr>
<tr><td><code>backgroundSize</code></td><td>Support two-value size i.e. `10px 20%`</td><td></td></tr>
<tr><td><code>backgroundClip</code></td><td><code>border-box</code>, <code>text</code></td><td></td></tr>
<tr><td><code>backgroundRepeat</code></td><td><code>repeat</code>, <code>repeat-x</code>, <code>repeat-y</code>, <code>no-repeat</code>, defaults to <code>repeat</code></td><td></td></tr>

<tr><td rowspan="5"><code>transform</code></td></tr>
<tr><td>Translate (<code>translate</code>, <code>translateX</code>, <code>translateY</code>)</td><td>Supported</td><td></td></tr>
<tr><td>Rotate</td><td>Supported</td><td></td></tr>
<tr><td>Scale (<code>scale</code>, <code>scaleX</code>, <code>scaleY</code>)</td><td>Supported</td><td></td></tr>
<tr><td>Skew (<code>skew</code>, <code>skewX</code>, <code>skewY</code>)</td><td>Supported</td><td></td></tr>

<tr>
<td colspan="2"><code>transformOrigin</code></td>
<td>Support one-value and two-value syntax (both relative and absolute values)</td>
<td></td>
</tr>

<tr>
<td colspan="2"><code>objectFit</code></td>
<td><code>contain</code>, <code>cover</code>, <code>none</code>, default to <code>none</code></td>
<td></td>
</tr>

<tr>
<td colspan="2"><code>opacity</code></td>
<td>Supported</td>
<td></td>
</tr>

<tr>
<td colspan="2"><code>boxShadow</code></td>
<td>Supported</td>
<td></td>
</tr>

<tr>
<td colspan="2"><code>overflow</code></td>
<td><code>visible</code> and <code>hidden</code>, default to <code>visible</code></td>
<td></td>
</tr>

<tr>
<td colspan="2"><code>filter</code></td>
<td>Supported</td>
<td></td>
</tr>

<tr>
<td colspan="2"><code>clipPath</code></td>
<td>Supported</td>
<td><a href="https://og-playground.vercel.app/?share=XVJNb9wgEP0rI6poW8lJnX6pstpe0h7aQ1UlrXLJBZvBZosZBDgbZ7X_PQMbZze5wPCGmXmPx1Z0pFA04osytzcOIKbZ4tftNscAA5p-SA2szuv6ZFXtwY1RaXiBKRO9lTOj2uLdgub4uwnYJUOOcx3ZaXRLVlrTu58Jx5hT6BKGJbWeYjJ6viAGXZ7_PN3K7n8faHLqgiwFzr_SWj9N5aorc48NvH93BF0_avlU1wXd7W7ctxws0l-KP8j_8FhypP4Y8lIp4_oGzg_YgSKzY6FDau2EC0WAzhr_R5Z39GTnntzrj_UJ1BU34Z3jKi_lVEGd4zerfXEmDlCoA_yLqKCdIdKIQBrSgLChYNUqgpWhx5igo9FLZzBW8Bvv0tk6AjrZWoww0wSJoAsoE4KerD2NianDNbYgvbemk9m8mGdwLbqstEyxXMHNL1F2CTTXTyFPkE6BYbP6wIV81dMGAzeGS_b0tJWZ7y95K6-6YHzi4WTzNU2hdNUylrbtZKyKZ8Wft2wQy112UQnyhZRotqL4IZrP7IfY-yWabI5Q2E69aLS0ESuBI63N39nnv5425cR98r_4MbaoRJPChLtKJNnyjQGtpfKMYvcA">Example</a></td>
</tr>

<tr>
<td colspan="2"><code>lineClamp</code></td>
<td>Supported</td>
<td><a href="https://og-playground.vercel.app/?share=5VPBbtQwEP2VkRFakNKSshxQBBwoXDhwaEFc9uLYk6xbx2PZk-6G1Up8DR_GlzDOkgr13FtPGb_xvPf8ojkoQxZVo95Zd7cJAJknj-8Ph1IDbNH1W25gdVHXz1fVCdw5y9sHmHU5ej0J2nncL2ipP7mEhh0F6Rny4xCWbtTWutA3cFH_Q1ptbvtEY7CX5CnJxLOu6-7ZKPC1-4kNrF_P0PG4CR9KsZh_aP9_X60nc7tQAXgX8NLrIQrbPTjo1LvwkZhpkJF1HferU69IAcxiAN8zWmgnyDQgUAe8RdhR8naVwQsFZgZDQ9TBYa7gK-75_CYDBt16zDDRCExgEmpG6EbvzzLLy-EHtqBj9M7oElguGjKLocQ0q3iZEPIr1Iahk_kxFQUdLLjA2CcZlKuRdpiEGK7GzGetLn6_6Dt9bZKLLOIkz-8l0DSzdjrPtO3ovM3nc6KvJNJHyHa1ho368-s3vDBihQb5fVayEa-BX27UE093-apKUZxNqeag5v1Szdu6rtRpAVXzphwstmOvmk77jJXCgW7ctymW7eXdfBKesiSfhxatajiNeKwU61ZubNF7mmNUx78">Example</a></td>
</tr>

<tr><td rowspan="7">Mask</td></tr>
<tr><td><code>maskImage</code></td><td><code>linear-gradient(...)</code>, <code>radial-gradient(...)</code>, <code>url(...)</code></td><td><a href="https://og-playground.vercel.app/?share=pZJfb9MwFMW_imVp2ZDS5s_I1kULSMAkhgRoYlJf-uLYN8ltHTvYDm2o-t2xuxXBXvcQXed3rONj37unXAugJb0V-GulCLFuklDt92FNSAfYdq4k51manp3HT3CLwnUvmEA7SDZ52kjYnWhYf0ID3KFWXuNajr06qUxiq-4d9DZIoByYk7QercNm-qg9VOH8_-XG8x_4G0pymf-Dls9pr9L0mdaMb1qjRyW8x2jkRefcYMskwZ61YOejCrFtN-e6T4ZOOz3LinyRL65v3ubZdTZrari8KkQmbhh_jzuJdWXqWTbP51n0s1oUUdNX66GNuNFD5TP6MkXbKsvTNOK2sqatI9yhqGD60vHPHxq2fMDv67v022NbNA9vTjfqmd3ch0w-p2ECmZy1oXrLC46GSyDMkSI9C19MajlCTJxhPj8zftNfoyXUG3RfX21HkuTYBf-whhhowGMOBBXpXC_DWYfDSr1bqdvET46vNKZ6CH22tNzT44zQMrxDTJ-miJahL1RAPba0bJi0EFPo9RofpyGMoNse_7xRaOZdX4OgpTMjHGLqWO13dCCl3mojBT38AQ">Example</a></td></tr>
<tr><td><code>maskPosition</code></td><td>Supported</td><td><a href="https://og-playground.vercel.app/?share=pVJda9swFP0rQlC3Ayf-6NKmpt5gW2Ed7KOskJe8yNK1fRNZ8iR5iRfy3yelCayFPfXBvtK5h3uP7j07yrUAWtBbgb-XihDrRgnlbhfOhLSATesKcp6l6dl5_ARuULj2BSbQ9pKNHq0lbE9oOH9CA9yhVj7HtRw6dcoyiY26d9DZkALlwJxSq8E6rMeP2oMq9H-erj3-E_9AQS7zf6DFUe1Vmh7RivF1Y_SghK8xGHnROtfbIkmwYw3Y6aCCbNtOue6SvtVOT7JZPs_n1zdv8-w6m9QVXF7NRCZuGH-PW4lVaapJNs2nWfSrnM-iuitXfRNxo_vSa_RhjDZllqdpxG1pTVNFuEVRwvil5Z8_1GzxgN9Xd-m3x2ZWP7w5vahjdn0fNHmdhglkctKE6EtecDRcAmGOzNKz8MWkkgPExBnm9TPjSc8K_dAWjxP3O-q35PA_MRZQrdF9fX1DkiSHRfnZG2KgBo9zIKhI6zr5stl_RAXafr9U75bqNvEe9JHGVPeBammxowe30SJMNKZPfqRF2DAVUA0NLWomLcQUOr3Cx7EPZnabw80XCra46yoQtHBmgH1MHas8owUp9UYbKej-Lw">Example</a></td></tr>
<tr><td><code>maskSize</code></td><td>Support two-value size i.e. `10px 20%`</td><td><a href="https://og-playground.vercel.app/?share=pVLfb9MwEP5XLEvLhpQ2P0a3LlpAAiYxJEATk_rSF8e-JNc6drAd2lD1f8duV8H6yoN19ved7j7ffTvKtQBa0HuBv5aKEOtGCeVuF-6EtIBN6wpymaXpxWV8BDcoXHuGCbS9ZKNHawnbExrun9AAd6iV57iWQ6dOLJPYqEcHnQ0UKAfmRK0G67AeP2oPqtD_NV17_Af-hoJc5_9Aixe1N2n6glaMrxujByV8jcHIq9a53hZJgh1rwE4HFWTbdsp1l_StdnqSzfJ5Pr-9e5tnt9mkruD6ZiYyccf4e9xKrEpTTbJpPs2in-V8FtVdueqbiBvdl16jD2O0KbM8TSNuS2uaKsItihLGLy3__KFmiyf8vnpIvz03s_rpzelHHbPrx6DJ6zRMIJOTJkRf8oqj4RIIc2SWXoQTk0oOEBNnmNfPjE96Veg4Gr-ffkvyvztaQLVG9_X_O5EkOWzID90QAzV4nANBRVrXyfNm52oCv98v1buluk-863ykMdV98IilxY4e_EWLMMOYHh1Ii7BTKqAaGlrUTFqIKXR6hc9jH-zrNoeXLxSM8NBVIGjhzAD7mDpW-YwWpNQbbaSg-z8">Example</a></td></tr>
<tr><td><code>maskRepeat</code></td><td><code>repeat</code>, <code>repeat-x</code>, <code>repeat-y</code>, <code>no-repeat</code>, defaults to <code>repeat</code></td><td><a href="https://og-playground.vercel.app/?share=nVbpjqNIEn6VkqXVzMg1AhtjQ-3MStwGA-Ywl9U_hssJ5jSHAbf63TdxdfXUzh4_FhllHF8cGZkm4usirKJ48bb4LUrvX8qXl7ab8vj3r19n-uUliVOQdG8vP61Q9G8_vb4LhzTqkr_IorStc3-C0ksejx_SmWbTJg67tCqhLqzyvig_tH6eglLs4qKdVXHZxc2H6tq3XXqZmAoKyzn-v6ovUG6mj_jtBVt_Ejnfs92i6Hdp4IcZaKq-jKCPvsl_jvzOf0sLH8RIXYK_B34bbzevqU0fjQE9CKCi4KOaVsJZAFK0PvMaQ3lwYbPiSNqzgHJV00BFqmk34XaGiEbucHlxslDqMNtRAJpyJkUpM0NTFAcXzqco6ztPUSbggs-8BTgY_AMvwl9UU9Qz_lPvPP0-WaiEz6zinkKoPwLIs9_lkGcATGEO-o6jTUANn3iKeJJ2F-6CJ58PJp8_ICFzA7QeFZqSbqHwBOW1zSeow62UY6HeAxNPzgKZnk18E7jfU2LHzbFMulBY5ZHAgVhYtUGpbGMWTT3HuHuFtZ35wLFRzyRScQ-2EDNEQkuKeaJaDM0GmJSLrNcrzGYQr5uDyFBA20vZ-VqbBuf98BkWRqGZUhXtjeGYEvcIizC5DB9yQU7niRiPpwyXH9QkP8RJdqF9unrEDo56Luig_fXD9yf_3NlVr2GRw3zye5DS01nwtp4j3SNXJ8VU_IH_eD9ygfjifEVTf2-gIVvd5TUO8-CzYC3l8rNWJOo750J-cHBfRKqB6rMf4t2-1mDsPCiN5Bn_uhk15t3umJGT79h9JPCQJ_tP9oSM_YfcP-rGwFrAPViZIUAbiH2v97P-p81BsHcJDc-ZWvGSwfHWkRZUm-8UDuWsMsJM7ITXvl8YYxpVaWIcDFuQMp-lDYZXUyUzNVLX4KYTMBgGNxwFaEUoF84QWe6mXMYz13GVeU91ISF0sPF8oDNpbYtxHVWOmSxRzOXLyHCzEenHcHk5as7liJUdRl2SjhWUE3PZ2gdM43nDPrEUGwnJxHISvL6WuHksd8qjuK66bTDEQyKKHu5qIGNFxvAo5byyizvKZ1y7x28hf-CjZXAw2EGzWn_bP04b2lbtMx3Y0jpXaDNktVtXbPH7o8A3k8q5jhVNxsBWhe0F8jqqYqJnr17XAO9o1UZrAcDRo3tY7Zc5wGhikM4Wilz3YTH1akMOy1XMMGOVEZokexWWlo7HMrJ4mBzVqM7u8aSyN7SWb870cAKdUCqJ6c2z3xr6gV61QqrD22-O_pRosq3iHQHGzFRQ5Yisjo61Tseq0VByWxKmdVrHa9fRk122bBpiUHnDCTG_OR28OudwcW0E4qGozUaOdnHZRLesiUbXkbg1bku7lGdSrNTYBlHqgxtVdr9RjvZyd8xXd4BUYBvou7VvXLoxGkldoSrXdvmzRHnurQiLi9WfDPsgi_dJE5cB4pIZG6gaVm1qkrxQVSUqZU3d0bDMtxfdU3kSiVwJKVrPXy8HaWAJzNBDjq4entTprFOeWL32HNwX1u2dXVfSQJQeeyMecFNHn6ezUUmaO9md4uaKL3twybpTNuQ1QYGym8gitAjRu7DoFaQkWHI7miNzZ2UUsuEE2LlmjNrpp5XTh3mM-eXt_mi2O1kor9tBsfwbxgILhzkJ68PRPh25nlhRkxTTuWQq6dWVpp3BVPWq6ree34P7ivDPAljuwsQbB8fxjnTSn-lsx7sPMdwQe48zB3lI0rI02Vgz2kBmsColkI3M3QuwOSUEzZuCd99fNIykkP0YINFwL6LNUiQmKiAPoo5PqkVFGc1fEaQtxrW6psdO4C5IhRxC1916J3mrxeDerWKcRC_0etLjCiR7IexI2eG0w57VB4S0zd53hq0xZI7sNuqZ2ka4KhmHvBQke2sbO_gn013TtlADlAmPyZEcSqsdVrqFl8IbmAgqnY9pFukjifCFN1mcGPOEFPsIAi-V0rgqfdMZSlIkpEGa4ua3J44SQ4thMqQRr8ujjuxUKgCIq3Iaheg6fbOvF2qN895725IMC-eaTAIA_P77Lx_NvfDbTJw79NvLH3laxn7zK2j8KIUTwM9d9dLMPf71Jcj7-PWla_yyrf0G6n7545P9-3AwTyj1-LJaz8tn90Zcx_48VjRP4tcfSicOsrRTPmXwl6GhvYPlWOQfg4O2V9fnicZ8x0B92OyOLDWIKV2dnbz097B5XMGgMCKICnsK1_MHGk0VczNCzBp-2DG9IDeaKQ4iSwHlJEIsNSrXp49N4Ix9-PjUXGCjiyYcUyb8HhbhfcYpDPmIijDVruPguUYlCjBmho4KMzxUk6Yhpn2-zDDILNeqJ0g_LKDDWDI7v0_dKLMZpJWVyHM45NeqOazgikMfhgJt1KvVzuts66QiOBd5G8D9RuukjgQrFRliCZvOnMvyx0H8ezH_n-P808v_ONQ_Qf_laL99-1L-40v5GwLHXLguXhdVPQ-l7eLt6-I50C7eZpevi_eRd_E2D5GLKA56sHi7-Hkbvy7iorqmp6me5-VueHLQ0Tx5ckUQR4u3runjb6-Lzg8gIonzvBqqJo8W3_4J">Example</a></td></tr>

</tbody>
</table>


</details>

_View up-to-date list here: https://github.com/vercel/satori#css_


## Libraries
- [Next.js 13](https://nextjs.org/docs)
- [Vercel/og](https://www.npmjs.com/package/@vercel/og)

## Reference
- https://vercel.com/docs/functions/edge-functions/og-image-generation
- https://vercel.com/blog/introducing-vercel-og-image-generation-fast-dynamic-social-card-images
- https://github.com/vercel/next.js/blob/canary/examples/with-docker-multi-env/docker/production/Dockerfile