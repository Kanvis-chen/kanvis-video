# Local CosyVoice 3.0 Voice Adapter

Use this path for local, zero-provider-cost Chinese voice cloning.

## Inputs

- `reference_video` or `reference_wav`: authorized user recording.
- `tts_text`: final narration text.
- `prompt_text`: transcript matching the prompt audio.
- `model_dir`: CosyVoice 3.0 model directory.
- `python`: Python executable with CosyVoice dependencies installed.

## Reference preparation

Create a clean prompt wav:

```powershell
ffmpeg -y -i "<reference-video-or-wav>" -ss 00:00:00 -t 00:00:20 -ac 1 -ar 24000 "prompt20.wav"
```

Rules:

- keep prompt audio `<= 30s`;
- prefer one speaker, low background noise, no music;
- trim to a natural sentence boundary when possible;
- transcribe or hand-correct the prompt text so it matches the prompt wav.

## CosyVoice 3.0 call pattern

Set cache paths explicitly when the user wants models outside `C:\`:

```powershell
$env:PYTHONPATH="<cosyvoice-repo>"
$env:MODELSCOPE_CACHE="<model-cache>"
$env:XDG_CACHE_HOME="<cache-root>"
```

The CosyVoice3 `prompt_text` should include the instruction prefix:

```text
You are a helpful assistant.<|endofprompt|><matched prompt transcript>
```

Use this Python pattern:

```python
from cosyvoice.cli.cosyvoice import CosyVoice3
import torch, torchaudio

model = CosyVoice3(model_dir, fp16=False)
prompt_text = "You are a helpful assistant.<|endofprompt|>" + matched_prompt_transcript
parts = []
for out in model.inference_zero_shot(tts_text, prompt_text, prompt_wav_path, stream=False, speed=1.0, text_frontend=True):
    parts.append(out["tts_speech"])
speech = torch.cat(parts, dim=1) if len(parts) > 1 else parts[0]
torchaudio.save(output_wav, speech, model.sample_rate)
```

## Quality notes

- CPU inference may run several times slower than realtime.
- If output quality is poor, choose a clearer 15–20 second prompt and correct the transcript.
- If text contains English product names, add pronunciation notes before final synthesis.
- This produces audio only. For publish-ready avatar lip sync, send the final wav to an avatar provider or a local lip-sync adapter.
