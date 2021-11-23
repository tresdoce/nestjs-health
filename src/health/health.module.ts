import {DynamicModule, forwardRef, Global, Module} from '@nestjs/common';
import {HttpModule} from '@nestjs/axios';
import {TerminusModule} from '@nestjs/terminus';
import {LivenessController} from './controllers/liveness.controller';
import {ReadinessController} from './controllers/readiness.controller';
import {CONFIG_OPTIONS} from "./constants";

//forwardRef(() => TerminusModule)

@Global()
@Module({})
export class HealthModule {

    static forRoot(config: any): DynamicModule {
        return {
            global: true,
            module: HealthModule,
            imports: [HttpModule, TerminusModule],
            controllers: [LivenessController, ReadinessController],
            exports: [LivenessController, ReadinessController],
            providers: [
                LivenessController,
                ReadinessController,
                {
                    provide: CONFIG_OPTIONS,
                    useValue: config,
                },
            ],
        };
    }
}
